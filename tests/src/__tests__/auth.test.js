// tests/src/__tests__/auth.test.js

// Mock: bcrypt y jwt
const bcrypt = {
  compare: jest.fn(),
};
const jwt = {
  sign: jest.fn(),
};

// Mock prisma
const prisma = {
  users: {
    findUnique: jest.fn(),
  },
};

// Implementación simulada de login (como auth.controller.js)
async function login(req, res) {
  const { email, password } = req.body;

  const user = await prisma.users.findUnique({ where: { email } });

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: 'Contraseña incorrecta' });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, 'secreto', {
    expiresIn: '1h',
  });

  res.json({
    token,
    user: {
      id: user.id,
      name: user.name,
      role: user.role,
    },
  });
}

describe('🔐 Pruebas de login', () => {
  const mockUser = {
    id: 1,
    name: 'testuser',
    password: 'hashedpassword',
    role: 'cliente',
  };

  const req = {
    body: {
      email: 'test@example.com',
      password: 'password123',
    },
  };

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('🚫 Retorna 404 si el usuario no existe', async () => {
    prisma.users.findUnique.mockResolvedValue(null);

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Usuario no encontrado' });
  });

  it('🚫 Retorna 401 si la contraseña es incorrecta', async () => {
    prisma.users.findUnique.mockResolvedValue(mockUser);
    bcrypt.compare.mockResolvedValue(false);

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'Contraseña incorrecta' });
  });

  it('✅ Devuelve token y usuario si login es exitoso', async () => {
    prisma.users.findUnique.mockResolvedValue(mockUser);
    bcrypt.compare.mockResolvedValue(true);
    jwt.sign.mockReturnValue('mocked.jwt.token');

    await login(req, res);

    expect(res.json).toHaveBeenCalledWith({
      token: 'mocked.jwt.token',
      user: {
        id: 1,
        name: 'testuser',
        role: 'cliente',
      },
    });
  });
});
