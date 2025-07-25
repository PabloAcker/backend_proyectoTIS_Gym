
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model branches
 * 
 */
export type branches = $Result.DefaultSelection<Prisma.$branchesPayload>
/**
 * Model memberships
 * 
 */
export type memberships = $Result.DefaultSelection<Prisma.$membershipsPayload>
/**
 * Model qrs
 * 
 */
export type qrs = $Result.DefaultSelection<Prisma.$qrsPayload>
/**
 * Model reports
 * 
 */
export type reports = $Result.DefaultSelection<Prisma.$reportsPayload>
/**
 * Model rfid_access
 * 
 */
export type rfid_access = $Result.DefaultSelection<Prisma.$rfid_accessPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const users_role: {
  admin: 'admin',
  empleado: 'empleado',
  cliente: 'cliente'
};

export type users_role = (typeof users_role)[keyof typeof users_role]

}

export type users_role = $Enums.users_role

export const users_role: typeof $Enums.users_role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Branches
 * const branches = await prisma.branches.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Branches
   * const branches = await prisma.branches.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.branches`: Exposes CRUD operations for the **branches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branches.findMany()
    * ```
    */
  get branches(): Prisma.branchesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberships`: Exposes CRUD operations for the **memberships** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memberships
    * const memberships = await prisma.memberships.findMany()
    * ```
    */
  get memberships(): Prisma.membershipsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qrs`: Exposes CRUD operations for the **qrs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Qrs
    * const qrs = await prisma.qrs.findMany()
    * ```
    */
  get qrs(): Prisma.qrsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reports`: Exposes CRUD operations for the **reports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.reports.findMany()
    * ```
    */
  get reports(): Prisma.reportsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rfid_access`: Exposes CRUD operations for the **rfid_access** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rfid_accesses
    * const rfid_accesses = await prisma.rfid_access.findMany()
    * ```
    */
  get rfid_access(): Prisma.rfid_accessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    branches: 'branches',
    memberships: 'memberships',
    qrs: 'qrs',
    reports: 'reports',
    rfid_access: 'rfid_access',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "branches" | "memberships" | "qrs" | "reports" | "rfid_access" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      branches: {
        payload: Prisma.$branchesPayload<ExtArgs>
        fields: Prisma.branchesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.branchesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.branchesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload>
          }
          findFirst: {
            args: Prisma.branchesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.branchesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload>
          }
          findMany: {
            args: Prisma.branchesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload>[]
          }
          create: {
            args: Prisma.branchesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload>
          }
          createMany: {
            args: Prisma.branchesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.branchesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload>
          }
          update: {
            args: Prisma.branchesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload>
          }
          deleteMany: {
            args: Prisma.branchesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.branchesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.branchesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload>
          }
          aggregate: {
            args: Prisma.BranchesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranches>
          }
          groupBy: {
            args: Prisma.branchesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchesGroupByOutputType>[]
          }
          count: {
            args: Prisma.branchesCountArgs<ExtArgs>
            result: $Utils.Optional<BranchesCountAggregateOutputType> | number
          }
        }
      }
      memberships: {
        payload: Prisma.$membershipsPayload<ExtArgs>
        fields: Prisma.membershipsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.membershipsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.membershipsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload>
          }
          findFirst: {
            args: Prisma.membershipsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.membershipsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload>
          }
          findMany: {
            args: Prisma.membershipsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload>[]
          }
          create: {
            args: Prisma.membershipsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload>
          }
          createMany: {
            args: Prisma.membershipsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.membershipsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload>
          }
          update: {
            args: Prisma.membershipsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload>
          }
          deleteMany: {
            args: Prisma.membershipsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.membershipsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.membershipsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload>
          }
          aggregate: {
            args: Prisma.MembershipsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberships>
          }
          groupBy: {
            args: Prisma.membershipsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipsGroupByOutputType>[]
          }
          count: {
            args: Prisma.membershipsCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipsCountAggregateOutputType> | number
          }
        }
      }
      qrs: {
        payload: Prisma.$qrsPayload<ExtArgs>
        fields: Prisma.qrsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.qrsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qrsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.qrsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qrsPayload>
          }
          findFirst: {
            args: Prisma.qrsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qrsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.qrsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qrsPayload>
          }
          findMany: {
            args: Prisma.qrsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qrsPayload>[]
          }
          create: {
            args: Prisma.qrsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qrsPayload>
          }
          createMany: {
            args: Prisma.qrsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.qrsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qrsPayload>
          }
          update: {
            args: Prisma.qrsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qrsPayload>
          }
          deleteMany: {
            args: Prisma.qrsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.qrsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.qrsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$qrsPayload>
          }
          aggregate: {
            args: Prisma.QrsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQrs>
          }
          groupBy: {
            args: Prisma.qrsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QrsGroupByOutputType>[]
          }
          count: {
            args: Prisma.qrsCountArgs<ExtArgs>
            result: $Utils.Optional<QrsCountAggregateOutputType> | number
          }
        }
      }
      reports: {
        payload: Prisma.$reportsPayload<ExtArgs>
        fields: Prisma.reportsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reportsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reportsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          findFirst: {
            args: Prisma.reportsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reportsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          findMany: {
            args: Prisma.reportsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>[]
          }
          create: {
            args: Prisma.reportsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          createMany: {
            args: Prisma.reportsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reportsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          update: {
            args: Prisma.reportsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          deleteMany: {
            args: Prisma.reportsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reportsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reportsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          aggregate: {
            args: Prisma.ReportsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReports>
          }
          groupBy: {
            args: Prisma.reportsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reportsCountArgs<ExtArgs>
            result: $Utils.Optional<ReportsCountAggregateOutputType> | number
          }
        }
      }
      rfid_access: {
        payload: Prisma.$rfid_accessPayload<ExtArgs>
        fields: Prisma.rfid_accessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rfid_accessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfid_accessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rfid_accessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfid_accessPayload>
          }
          findFirst: {
            args: Prisma.rfid_accessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfid_accessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rfid_accessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfid_accessPayload>
          }
          findMany: {
            args: Prisma.rfid_accessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfid_accessPayload>[]
          }
          create: {
            args: Prisma.rfid_accessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfid_accessPayload>
          }
          createMany: {
            args: Prisma.rfid_accessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rfid_accessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfid_accessPayload>
          }
          update: {
            args: Prisma.rfid_accessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfid_accessPayload>
          }
          deleteMany: {
            args: Prisma.rfid_accessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rfid_accessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rfid_accessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfid_accessPayload>
          }
          aggregate: {
            args: Prisma.Rfid_accessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRfid_access>
          }
          groupBy: {
            args: Prisma.rfid_accessGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rfid_accessGroupByOutputType>[]
          }
          count: {
            args: Prisma.rfid_accessCountArgs<ExtArgs>
            result: $Utils.Optional<Rfid_accessCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    branches?: branchesOmit
    memberships?: membershipsOmit
    qrs?: qrsOmit
    reports?: reportsOmit
    rfid_access?: rfid_accessOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    memberships: number
    rfid_access: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | UsersCountOutputTypeCountMembershipsArgs
    rfid_access?: boolean | UsersCountOutputTypeCountRfid_accessArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: membershipsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRfid_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rfid_accessWhereInput
  }


  /**
   * Models
   */

  /**
   * Model branches
   */

  export type AggregateBranches = {
    _count: BranchesCountAggregateOutputType | null
    _avg: BranchesAvgAggregateOutputType | null
    _sum: BranchesSumAggregateOutputType | null
    _min: BranchesMinAggregateOutputType | null
    _max: BranchesMaxAggregateOutputType | null
  }

  export type BranchesAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type BranchesSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type BranchesMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    services: string | null
    created_at: Date | null
  }

  export type BranchesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    services: string | null
    created_at: Date | null
  }

  export type BranchesCountAggregateOutputType = {
    id: number
    name: number
    address: number
    latitude: number
    longitude: number
    services: number
    created_at: number
    _all: number
  }


  export type BranchesAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type BranchesSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type BranchesMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    services?: true
    created_at?: true
  }

  export type BranchesMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    services?: true
    created_at?: true
  }

  export type BranchesCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    services?: true
    created_at?: true
    _all?: true
  }

  export type BranchesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which branches to aggregate.
     */
    where?: branchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches to fetch.
     */
    orderBy?: branchesOrderByWithRelationInput | branchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: branchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned branches
    **/
    _count?: true | BranchesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BranchesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BranchesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchesMaxAggregateInputType
  }

  export type GetBranchesAggregateType<T extends BranchesAggregateArgs> = {
        [P in keyof T & keyof AggregateBranches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranches[P]>
      : GetScalarType<T[P], AggregateBranches[P]>
  }




  export type branchesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: branchesWhereInput
    orderBy?: branchesOrderByWithAggregationInput | branchesOrderByWithAggregationInput[]
    by: BranchesScalarFieldEnum[] | BranchesScalarFieldEnum
    having?: branchesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchesCountAggregateInputType | true
    _avg?: BranchesAvgAggregateInputType
    _sum?: BranchesSumAggregateInputType
    _min?: BranchesMinAggregateInputType
    _max?: BranchesMaxAggregateInputType
  }

  export type BranchesGroupByOutputType = {
    id: number
    name: string
    address: string | null
    latitude: number | null
    longitude: number | null
    services: string | null
    created_at: Date | null
    _count: BranchesCountAggregateOutputType | null
    _avg: BranchesAvgAggregateOutputType | null
    _sum: BranchesSumAggregateOutputType | null
    _min: BranchesMinAggregateOutputType | null
    _max: BranchesMaxAggregateOutputType | null
  }

  type GetBranchesGroupByPayload<T extends branchesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchesGroupByOutputType[P]>
            : GetScalarType<T[P], BranchesGroupByOutputType[P]>
        }
      >
    >


  export type branchesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    services?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["branches"]>



  export type branchesSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    services?: boolean
    created_at?: boolean
  }

  export type branchesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "latitude" | "longitude" | "services" | "created_at", ExtArgs["result"]["branches"]>

  export type $branchesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "branches"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string | null
      latitude: number | null
      longitude: number | null
      services: string | null
      created_at: Date | null
    }, ExtArgs["result"]["branches"]>
    composites: {}
  }

  type branchesGetPayload<S extends boolean | null | undefined | branchesDefaultArgs> = $Result.GetResult<Prisma.$branchesPayload, S>

  type branchesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<branchesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchesCountAggregateInputType | true
    }

  export interface branchesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['branches'], meta: { name: 'branches' } }
    /**
     * Find zero or one Branches that matches the filter.
     * @param {branchesFindUniqueArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends branchesFindUniqueArgs>(args: SelectSubset<T, branchesFindUniqueArgs<ExtArgs>>): Prisma__branchesClient<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Branches that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {branchesFindUniqueOrThrowArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends branchesFindUniqueOrThrowArgs>(args: SelectSubset<T, branchesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__branchesClient<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesFindFirstArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends branchesFindFirstArgs>(args?: SelectSubset<T, branchesFindFirstArgs<ExtArgs>>): Prisma__branchesClient<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branches that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesFindFirstOrThrowArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends branchesFindFirstOrThrowArgs>(args?: SelectSubset<T, branchesFindFirstOrThrowArgs<ExtArgs>>): Prisma__branchesClient<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branches.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branches.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchesWithIdOnly = await prisma.branches.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends branchesFindManyArgs>(args?: SelectSubset<T, branchesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Branches.
     * @param {branchesCreateArgs} args - Arguments to create a Branches.
     * @example
     * // Create one Branches
     * const Branches = await prisma.branches.create({
     *   data: {
     *     // ... data to create a Branches
     *   }
     * })
     * 
     */
    create<T extends branchesCreateArgs>(args: SelectSubset<T, branchesCreateArgs<ExtArgs>>): Prisma__branchesClient<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Branches.
     * @param {branchesCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branches = await prisma.branches.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends branchesCreateManyArgs>(args?: SelectSubset<T, branchesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Branches.
     * @param {branchesDeleteArgs} args - Arguments to delete one Branches.
     * @example
     * // Delete one Branches
     * const Branches = await prisma.branches.delete({
     *   where: {
     *     // ... filter to delete one Branches
     *   }
     * })
     * 
     */
    delete<T extends branchesDeleteArgs>(args: SelectSubset<T, branchesDeleteArgs<ExtArgs>>): Prisma__branchesClient<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Branches.
     * @param {branchesUpdateArgs} args - Arguments to update one Branches.
     * @example
     * // Update one Branches
     * const branches = await prisma.branches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends branchesUpdateArgs>(args: SelectSubset<T, branchesUpdateArgs<ExtArgs>>): Prisma__branchesClient<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Branches.
     * @param {branchesDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends branchesDeleteManyArgs>(args?: SelectSubset<T, branchesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branches = await prisma.branches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends branchesUpdateManyArgs>(args: SelectSubset<T, branchesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Branches.
     * @param {branchesUpsertArgs} args - Arguments to update or create a Branches.
     * @example
     * // Update or create a Branches
     * const branches = await prisma.branches.upsert({
     *   create: {
     *     // ... data to create a Branches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branches we want to update
     *   }
     * })
     */
    upsert<T extends branchesUpsertArgs>(args: SelectSubset<T, branchesUpsertArgs<ExtArgs>>): Prisma__branchesClient<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branches.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends branchesCountArgs>(
      args?: Subset<T, branchesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchesAggregateArgs>(args: Subset<T, BranchesAggregateArgs>): Prisma.PrismaPromise<GetBranchesAggregateType<T>>

    /**
     * Group by Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends branchesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: branchesGroupByArgs['orderBy'] }
        : { orderBy?: branchesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, branchesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the branches model
   */
  readonly fields: branchesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for branches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__branchesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the branches model
   */
  interface branchesFieldRefs {
    readonly id: FieldRef<"branches", 'Int'>
    readonly name: FieldRef<"branches", 'String'>
    readonly address: FieldRef<"branches", 'String'>
    readonly latitude: FieldRef<"branches", 'Float'>
    readonly longitude: FieldRef<"branches", 'Float'>
    readonly services: FieldRef<"branches", 'String'>
    readonly created_at: FieldRef<"branches", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * branches findUnique
   */
  export type branchesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * Filter, which branches to fetch.
     */
    where: branchesWhereUniqueInput
  }

  /**
   * branches findUniqueOrThrow
   */
  export type branchesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * Filter, which branches to fetch.
     */
    where: branchesWhereUniqueInput
  }

  /**
   * branches findFirst
   */
  export type branchesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * Filter, which branches to fetch.
     */
    where?: branchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches to fetch.
     */
    orderBy?: branchesOrderByWithRelationInput | branchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for branches.
     */
    cursor?: branchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of branches.
     */
    distinct?: BranchesScalarFieldEnum | BranchesScalarFieldEnum[]
  }

  /**
   * branches findFirstOrThrow
   */
  export type branchesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * Filter, which branches to fetch.
     */
    where?: branchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches to fetch.
     */
    orderBy?: branchesOrderByWithRelationInput | branchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for branches.
     */
    cursor?: branchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of branches.
     */
    distinct?: BranchesScalarFieldEnum | BranchesScalarFieldEnum[]
  }

  /**
   * branches findMany
   */
  export type branchesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * Filter, which branches to fetch.
     */
    where?: branchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches to fetch.
     */
    orderBy?: branchesOrderByWithRelationInput | branchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing branches.
     */
    cursor?: branchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches.
     */
    skip?: number
    distinct?: BranchesScalarFieldEnum | BranchesScalarFieldEnum[]
  }

  /**
   * branches create
   */
  export type branchesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * The data needed to create a branches.
     */
    data: XOR<branchesCreateInput, branchesUncheckedCreateInput>
  }

  /**
   * branches createMany
   */
  export type branchesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many branches.
     */
    data: branchesCreateManyInput | branchesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * branches update
   */
  export type branchesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * The data needed to update a branches.
     */
    data: XOR<branchesUpdateInput, branchesUncheckedUpdateInput>
    /**
     * Choose, which branches to update.
     */
    where: branchesWhereUniqueInput
  }

  /**
   * branches updateMany
   */
  export type branchesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update branches.
     */
    data: XOR<branchesUpdateManyMutationInput, branchesUncheckedUpdateManyInput>
    /**
     * Filter which branches to update
     */
    where?: branchesWhereInput
    /**
     * Limit how many branches to update.
     */
    limit?: number
  }

  /**
   * branches upsert
   */
  export type branchesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * The filter to search for the branches to update in case it exists.
     */
    where: branchesWhereUniqueInput
    /**
     * In case the branches found by the `where` argument doesn't exist, create a new branches with this data.
     */
    create: XOR<branchesCreateInput, branchesUncheckedCreateInput>
    /**
     * In case the branches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<branchesUpdateInput, branchesUncheckedUpdateInput>
  }

  /**
   * branches delete
   */
  export type branchesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * Filter which branches to delete.
     */
    where: branchesWhereUniqueInput
  }

  /**
   * branches deleteMany
   */
  export type branchesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which branches to delete
     */
    where?: branchesWhereInput
    /**
     * Limit how many branches to delete.
     */
    limit?: number
  }

  /**
   * branches without action
   */
  export type branchesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
  }


  /**
   * Model memberships
   */

  export type AggregateMemberships = {
    _count: MembershipsCountAggregateOutputType | null
    _avg: MembershipsAvgAggregateOutputType | null
    _sum: MembershipsSumAggregateOutputType | null
    _min: MembershipsMinAggregateOutputType | null
    _max: MembershipsMaxAggregateOutputType | null
  }

  export type MembershipsAvgAggregateOutputType = {
    id: number | null
    price: number | null
    user_id: number | null
  }

  export type MembershipsSumAggregateOutputType = {
    id: number | null
    price: number | null
    user_id: number | null
  }

  export type MembershipsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    duration: string | null
    start_date: Date | null
    end_date: Date | null
    price: number | null
    status: boolean | null
    user_id: number | null
  }

  export type MembershipsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    duration: string | null
    start_date: Date | null
    end_date: Date | null
    price: number | null
    status: boolean | null
    user_id: number | null
  }

  export type MembershipsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    duration: number
    start_date: number
    end_date: number
    price: number
    status: number
    user_id: number
    _all: number
  }


  export type MembershipsAvgAggregateInputType = {
    id?: true
    price?: true
    user_id?: true
  }

  export type MembershipsSumAggregateInputType = {
    id?: true
    price?: true
    user_id?: true
  }

  export type MembershipsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    duration?: true
    start_date?: true
    end_date?: true
    price?: true
    status?: true
    user_id?: true
  }

  export type MembershipsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    duration?: true
    start_date?: true
    end_date?: true
    price?: true
    status?: true
    user_id?: true
  }

  export type MembershipsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    duration?: true
    start_date?: true
    end_date?: true
    price?: true
    status?: true
    user_id?: true
    _all?: true
  }

  export type MembershipsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which memberships to aggregate.
     */
    where?: membershipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memberships to fetch.
     */
    orderBy?: membershipsOrderByWithRelationInput | membershipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: membershipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned memberships
    **/
    _count?: true | MembershipsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembershipsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembershipsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipsMaxAggregateInputType
  }

  export type GetMembershipsAggregateType<T extends MembershipsAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberships]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberships[P]>
      : GetScalarType<T[P], AggregateMemberships[P]>
  }




  export type membershipsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: membershipsWhereInput
    orderBy?: membershipsOrderByWithAggregationInput | membershipsOrderByWithAggregationInput[]
    by: MembershipsScalarFieldEnum[] | MembershipsScalarFieldEnum
    having?: membershipsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipsCountAggregateInputType | true
    _avg?: MembershipsAvgAggregateInputType
    _sum?: MembershipsSumAggregateInputType
    _min?: MembershipsMinAggregateInputType
    _max?: MembershipsMaxAggregateInputType
  }

  export type MembershipsGroupByOutputType = {
    id: number
    name: string
    description: string | null
    duration: string | null
    start_date: Date | null
    end_date: Date | null
    price: number | null
    status: boolean | null
    user_id: number | null
    _count: MembershipsCountAggregateOutputType | null
    _avg: MembershipsAvgAggregateOutputType | null
    _sum: MembershipsSumAggregateOutputType | null
    _min: MembershipsMinAggregateOutputType | null
    _max: MembershipsMaxAggregateOutputType | null
  }

  type GetMembershipsGroupByPayload<T extends membershipsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipsGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipsGroupByOutputType[P]>
        }
      >
    >


  export type membershipsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    duration?: boolean
    start_date?: boolean
    end_date?: boolean
    price?: boolean
    status?: boolean
    user_id?: boolean
    users?: boolean | memberships$usersArgs<ExtArgs>
  }, ExtArgs["result"]["memberships"]>



  export type membershipsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    duration?: boolean
    start_date?: boolean
    end_date?: boolean
    price?: boolean
    status?: boolean
    user_id?: boolean
  }

  export type membershipsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "duration" | "start_date" | "end_date" | "price" | "status" | "user_id", ExtArgs["result"]["memberships"]>
  export type membershipsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | memberships$usersArgs<ExtArgs>
  }

  export type $membershipsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "memberships"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      duration: string | null
      start_date: Date | null
      end_date: Date | null
      price: number | null
      status: boolean | null
      user_id: number | null
    }, ExtArgs["result"]["memberships"]>
    composites: {}
  }

  type membershipsGetPayload<S extends boolean | null | undefined | membershipsDefaultArgs> = $Result.GetResult<Prisma.$membershipsPayload, S>

  type membershipsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<membershipsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembershipsCountAggregateInputType | true
    }

  export interface membershipsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['memberships'], meta: { name: 'memberships' } }
    /**
     * Find zero or one Memberships that matches the filter.
     * @param {membershipsFindUniqueArgs} args - Arguments to find a Memberships
     * @example
     * // Get one Memberships
     * const memberships = await prisma.memberships.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends membershipsFindUniqueArgs>(args: SelectSubset<T, membershipsFindUniqueArgs<ExtArgs>>): Prisma__membershipsClient<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Memberships that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {membershipsFindUniqueOrThrowArgs} args - Arguments to find a Memberships
     * @example
     * // Get one Memberships
     * const memberships = await prisma.memberships.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends membershipsFindUniqueOrThrowArgs>(args: SelectSubset<T, membershipsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__membershipsClient<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipsFindFirstArgs} args - Arguments to find a Memberships
     * @example
     * // Get one Memberships
     * const memberships = await prisma.memberships.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends membershipsFindFirstArgs>(args?: SelectSubset<T, membershipsFindFirstArgs<ExtArgs>>): Prisma__membershipsClient<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memberships that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipsFindFirstOrThrowArgs} args - Arguments to find a Memberships
     * @example
     * // Get one Memberships
     * const memberships = await prisma.memberships.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends membershipsFindFirstOrThrowArgs>(args?: SelectSubset<T, membershipsFindFirstOrThrowArgs<ExtArgs>>): Prisma__membershipsClient<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memberships
     * const memberships = await prisma.memberships.findMany()
     * 
     * // Get first 10 Memberships
     * const memberships = await prisma.memberships.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipsWithIdOnly = await prisma.memberships.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends membershipsFindManyArgs>(args?: SelectSubset<T, membershipsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Memberships.
     * @param {membershipsCreateArgs} args - Arguments to create a Memberships.
     * @example
     * // Create one Memberships
     * const Memberships = await prisma.memberships.create({
     *   data: {
     *     // ... data to create a Memberships
     *   }
     * })
     * 
     */
    create<T extends membershipsCreateArgs>(args: SelectSubset<T, membershipsCreateArgs<ExtArgs>>): Prisma__membershipsClient<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Memberships.
     * @param {membershipsCreateManyArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const memberships = await prisma.memberships.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends membershipsCreateManyArgs>(args?: SelectSubset<T, membershipsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Memberships.
     * @param {membershipsDeleteArgs} args - Arguments to delete one Memberships.
     * @example
     * // Delete one Memberships
     * const Memberships = await prisma.memberships.delete({
     *   where: {
     *     // ... filter to delete one Memberships
     *   }
     * })
     * 
     */
    delete<T extends membershipsDeleteArgs>(args: SelectSubset<T, membershipsDeleteArgs<ExtArgs>>): Prisma__membershipsClient<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Memberships.
     * @param {membershipsUpdateArgs} args - Arguments to update one Memberships.
     * @example
     * // Update one Memberships
     * const memberships = await prisma.memberships.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends membershipsUpdateArgs>(args: SelectSubset<T, membershipsUpdateArgs<ExtArgs>>): Prisma__membershipsClient<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Memberships.
     * @param {membershipsDeleteManyArgs} args - Arguments to filter Memberships to delete.
     * @example
     * // Delete a few Memberships
     * const { count } = await prisma.memberships.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends membershipsDeleteManyArgs>(args?: SelectSubset<T, membershipsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memberships
     * const memberships = await prisma.memberships.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends membershipsUpdateManyArgs>(args: SelectSubset<T, membershipsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Memberships.
     * @param {membershipsUpsertArgs} args - Arguments to update or create a Memberships.
     * @example
     * // Update or create a Memberships
     * const memberships = await prisma.memberships.upsert({
     *   create: {
     *     // ... data to create a Memberships
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Memberships we want to update
     *   }
     * })
     */
    upsert<T extends membershipsUpsertArgs>(args: SelectSubset<T, membershipsUpsertArgs<ExtArgs>>): Prisma__membershipsClient<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipsCountArgs} args - Arguments to filter Memberships to count.
     * @example
     * // Count the number of Memberships
     * const count = await prisma.memberships.count({
     *   where: {
     *     // ... the filter for the Memberships we want to count
     *   }
     * })
    **/
    count<T extends membershipsCountArgs>(
      args?: Subset<T, membershipsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MembershipsAggregateArgs>(args: Subset<T, MembershipsAggregateArgs>): Prisma.PrismaPromise<GetMembershipsAggregateType<T>>

    /**
     * Group by Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends membershipsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: membershipsGroupByArgs['orderBy'] }
        : { orderBy?: membershipsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, membershipsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the memberships model
   */
  readonly fields: membershipsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for memberships.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__membershipsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends memberships$usersArgs<ExtArgs> = {}>(args?: Subset<T, memberships$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the memberships model
   */
  interface membershipsFieldRefs {
    readonly id: FieldRef<"memberships", 'Int'>
    readonly name: FieldRef<"memberships", 'String'>
    readonly description: FieldRef<"memberships", 'String'>
    readonly duration: FieldRef<"memberships", 'String'>
    readonly start_date: FieldRef<"memberships", 'DateTime'>
    readonly end_date: FieldRef<"memberships", 'DateTime'>
    readonly price: FieldRef<"memberships", 'Float'>
    readonly status: FieldRef<"memberships", 'Boolean'>
    readonly user_id: FieldRef<"memberships", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * memberships findUnique
   */
  export type membershipsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * Filter, which memberships to fetch.
     */
    where: membershipsWhereUniqueInput
  }

  /**
   * memberships findUniqueOrThrow
   */
  export type membershipsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * Filter, which memberships to fetch.
     */
    where: membershipsWhereUniqueInput
  }

  /**
   * memberships findFirst
   */
  export type membershipsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * Filter, which memberships to fetch.
     */
    where?: membershipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memberships to fetch.
     */
    orderBy?: membershipsOrderByWithRelationInput | membershipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for memberships.
     */
    cursor?: membershipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of memberships.
     */
    distinct?: MembershipsScalarFieldEnum | MembershipsScalarFieldEnum[]
  }

  /**
   * memberships findFirstOrThrow
   */
  export type membershipsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * Filter, which memberships to fetch.
     */
    where?: membershipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memberships to fetch.
     */
    orderBy?: membershipsOrderByWithRelationInput | membershipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for memberships.
     */
    cursor?: membershipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of memberships.
     */
    distinct?: MembershipsScalarFieldEnum | MembershipsScalarFieldEnum[]
  }

  /**
   * memberships findMany
   */
  export type membershipsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * Filter, which memberships to fetch.
     */
    where?: membershipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memberships to fetch.
     */
    orderBy?: membershipsOrderByWithRelationInput | membershipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing memberships.
     */
    cursor?: membershipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memberships.
     */
    skip?: number
    distinct?: MembershipsScalarFieldEnum | MembershipsScalarFieldEnum[]
  }

  /**
   * memberships create
   */
  export type membershipsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * The data needed to create a memberships.
     */
    data: XOR<membershipsCreateInput, membershipsUncheckedCreateInput>
  }

  /**
   * memberships createMany
   */
  export type membershipsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many memberships.
     */
    data: membershipsCreateManyInput | membershipsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * memberships update
   */
  export type membershipsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * The data needed to update a memberships.
     */
    data: XOR<membershipsUpdateInput, membershipsUncheckedUpdateInput>
    /**
     * Choose, which memberships to update.
     */
    where: membershipsWhereUniqueInput
  }

  /**
   * memberships updateMany
   */
  export type membershipsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update memberships.
     */
    data: XOR<membershipsUpdateManyMutationInput, membershipsUncheckedUpdateManyInput>
    /**
     * Filter which memberships to update
     */
    where?: membershipsWhereInput
    /**
     * Limit how many memberships to update.
     */
    limit?: number
  }

  /**
   * memberships upsert
   */
  export type membershipsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * The filter to search for the memberships to update in case it exists.
     */
    where: membershipsWhereUniqueInput
    /**
     * In case the memberships found by the `where` argument doesn't exist, create a new memberships with this data.
     */
    create: XOR<membershipsCreateInput, membershipsUncheckedCreateInput>
    /**
     * In case the memberships was found with the provided `where` argument, update it with this data.
     */
    update: XOR<membershipsUpdateInput, membershipsUncheckedUpdateInput>
  }

  /**
   * memberships delete
   */
  export type membershipsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * Filter which memberships to delete.
     */
    where: membershipsWhereUniqueInput
  }

  /**
   * memberships deleteMany
   */
  export type membershipsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which memberships to delete
     */
    where?: membershipsWhereInput
    /**
     * Limit how many memberships to delete.
     */
    limit?: number
  }

  /**
   * memberships.users
   */
  export type memberships$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * memberships without action
   */
  export type membershipsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
  }


  /**
   * Model qrs
   */

  export type AggregateQrs = {
    _count: QrsCountAggregateOutputType | null
    _avg: QrsAvgAggregateOutputType | null
    _sum: QrsSumAggregateOutputType | null
    _min: QrsMinAggregateOutputType | null
    _max: QrsMaxAggregateOutputType | null
  }

  export type QrsAvgAggregateOutputType = {
    id: number | null
  }

  export type QrsSumAggregateOutputType = {
    id: number | null
  }

  export type QrsMinAggregateOutputType = {
    id: number | null
    image: string | null
    generated_at: Date | null
    description: string | null
  }

  export type QrsMaxAggregateOutputType = {
    id: number | null
    image: string | null
    generated_at: Date | null
    description: string | null
  }

  export type QrsCountAggregateOutputType = {
    id: number
    image: number
    generated_at: number
    description: number
    _all: number
  }


  export type QrsAvgAggregateInputType = {
    id?: true
  }

  export type QrsSumAggregateInputType = {
    id?: true
  }

  export type QrsMinAggregateInputType = {
    id?: true
    image?: true
    generated_at?: true
    description?: true
  }

  export type QrsMaxAggregateInputType = {
    id?: true
    image?: true
    generated_at?: true
    description?: true
  }

  export type QrsCountAggregateInputType = {
    id?: true
    image?: true
    generated_at?: true
    description?: true
    _all?: true
  }

  export type QrsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which qrs to aggregate.
     */
    where?: qrsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qrs to fetch.
     */
    orderBy?: qrsOrderByWithRelationInput | qrsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: qrsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned qrs
    **/
    _count?: true | QrsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QrsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QrsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QrsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QrsMaxAggregateInputType
  }

  export type GetQrsAggregateType<T extends QrsAggregateArgs> = {
        [P in keyof T & keyof AggregateQrs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQrs[P]>
      : GetScalarType<T[P], AggregateQrs[P]>
  }




  export type qrsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: qrsWhereInput
    orderBy?: qrsOrderByWithAggregationInput | qrsOrderByWithAggregationInput[]
    by: QrsScalarFieldEnum[] | QrsScalarFieldEnum
    having?: qrsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QrsCountAggregateInputType | true
    _avg?: QrsAvgAggregateInputType
    _sum?: QrsSumAggregateInputType
    _min?: QrsMinAggregateInputType
    _max?: QrsMaxAggregateInputType
  }

  export type QrsGroupByOutputType = {
    id: number
    image: string | null
    generated_at: Date | null
    description: string | null
    _count: QrsCountAggregateOutputType | null
    _avg: QrsAvgAggregateOutputType | null
    _sum: QrsSumAggregateOutputType | null
    _min: QrsMinAggregateOutputType | null
    _max: QrsMaxAggregateOutputType | null
  }

  type GetQrsGroupByPayload<T extends qrsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QrsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QrsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QrsGroupByOutputType[P]>
            : GetScalarType<T[P], QrsGroupByOutputType[P]>
        }
      >
    >


  export type qrsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    generated_at?: boolean
    description?: boolean
  }, ExtArgs["result"]["qrs"]>



  export type qrsSelectScalar = {
    id?: boolean
    image?: boolean
    generated_at?: boolean
    description?: boolean
  }

  export type qrsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "generated_at" | "description", ExtArgs["result"]["qrs"]>

  export type $qrsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "qrs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string | null
      generated_at: Date | null
      description: string | null
    }, ExtArgs["result"]["qrs"]>
    composites: {}
  }

  type qrsGetPayload<S extends boolean | null | undefined | qrsDefaultArgs> = $Result.GetResult<Prisma.$qrsPayload, S>

  type qrsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<qrsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QrsCountAggregateInputType | true
    }

  export interface qrsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['qrs'], meta: { name: 'qrs' } }
    /**
     * Find zero or one Qrs that matches the filter.
     * @param {qrsFindUniqueArgs} args - Arguments to find a Qrs
     * @example
     * // Get one Qrs
     * const qrs = await prisma.qrs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends qrsFindUniqueArgs>(args: SelectSubset<T, qrsFindUniqueArgs<ExtArgs>>): Prisma__qrsClient<$Result.GetResult<Prisma.$qrsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Qrs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {qrsFindUniqueOrThrowArgs} args - Arguments to find a Qrs
     * @example
     * // Get one Qrs
     * const qrs = await prisma.qrs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends qrsFindUniqueOrThrowArgs>(args: SelectSubset<T, qrsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__qrsClient<$Result.GetResult<Prisma.$qrsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qrs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qrsFindFirstArgs} args - Arguments to find a Qrs
     * @example
     * // Get one Qrs
     * const qrs = await prisma.qrs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends qrsFindFirstArgs>(args?: SelectSubset<T, qrsFindFirstArgs<ExtArgs>>): Prisma__qrsClient<$Result.GetResult<Prisma.$qrsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qrs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qrsFindFirstOrThrowArgs} args - Arguments to find a Qrs
     * @example
     * // Get one Qrs
     * const qrs = await prisma.qrs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends qrsFindFirstOrThrowArgs>(args?: SelectSubset<T, qrsFindFirstOrThrowArgs<ExtArgs>>): Prisma__qrsClient<$Result.GetResult<Prisma.$qrsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Qrs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qrsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Qrs
     * const qrs = await prisma.qrs.findMany()
     * 
     * // Get first 10 Qrs
     * const qrs = await prisma.qrs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qrsWithIdOnly = await prisma.qrs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends qrsFindManyArgs>(args?: SelectSubset<T, qrsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$qrsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Qrs.
     * @param {qrsCreateArgs} args - Arguments to create a Qrs.
     * @example
     * // Create one Qrs
     * const Qrs = await prisma.qrs.create({
     *   data: {
     *     // ... data to create a Qrs
     *   }
     * })
     * 
     */
    create<T extends qrsCreateArgs>(args: SelectSubset<T, qrsCreateArgs<ExtArgs>>): Prisma__qrsClient<$Result.GetResult<Prisma.$qrsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Qrs.
     * @param {qrsCreateManyArgs} args - Arguments to create many Qrs.
     * @example
     * // Create many Qrs
     * const qrs = await prisma.qrs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends qrsCreateManyArgs>(args?: SelectSubset<T, qrsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Qrs.
     * @param {qrsDeleteArgs} args - Arguments to delete one Qrs.
     * @example
     * // Delete one Qrs
     * const Qrs = await prisma.qrs.delete({
     *   where: {
     *     // ... filter to delete one Qrs
     *   }
     * })
     * 
     */
    delete<T extends qrsDeleteArgs>(args: SelectSubset<T, qrsDeleteArgs<ExtArgs>>): Prisma__qrsClient<$Result.GetResult<Prisma.$qrsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Qrs.
     * @param {qrsUpdateArgs} args - Arguments to update one Qrs.
     * @example
     * // Update one Qrs
     * const qrs = await prisma.qrs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends qrsUpdateArgs>(args: SelectSubset<T, qrsUpdateArgs<ExtArgs>>): Prisma__qrsClient<$Result.GetResult<Prisma.$qrsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Qrs.
     * @param {qrsDeleteManyArgs} args - Arguments to filter Qrs to delete.
     * @example
     * // Delete a few Qrs
     * const { count } = await prisma.qrs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends qrsDeleteManyArgs>(args?: SelectSubset<T, qrsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qrsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Qrs
     * const qrs = await prisma.qrs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends qrsUpdateManyArgs>(args: SelectSubset<T, qrsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Qrs.
     * @param {qrsUpsertArgs} args - Arguments to update or create a Qrs.
     * @example
     * // Update or create a Qrs
     * const qrs = await prisma.qrs.upsert({
     *   create: {
     *     // ... data to create a Qrs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Qrs we want to update
     *   }
     * })
     */
    upsert<T extends qrsUpsertArgs>(args: SelectSubset<T, qrsUpsertArgs<ExtArgs>>): Prisma__qrsClient<$Result.GetResult<Prisma.$qrsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Qrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qrsCountArgs} args - Arguments to filter Qrs to count.
     * @example
     * // Count the number of Qrs
     * const count = await prisma.qrs.count({
     *   where: {
     *     // ... the filter for the Qrs we want to count
     *   }
     * })
    **/
    count<T extends qrsCountArgs>(
      args?: Subset<T, qrsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QrsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Qrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QrsAggregateArgs>(args: Subset<T, QrsAggregateArgs>): Prisma.PrismaPromise<GetQrsAggregateType<T>>

    /**
     * Group by Qrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qrsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends qrsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: qrsGroupByArgs['orderBy'] }
        : { orderBy?: qrsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, qrsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQrsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the qrs model
   */
  readonly fields: qrsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for qrs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__qrsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the qrs model
   */
  interface qrsFieldRefs {
    readonly id: FieldRef<"qrs", 'Int'>
    readonly image: FieldRef<"qrs", 'String'>
    readonly generated_at: FieldRef<"qrs", 'DateTime'>
    readonly description: FieldRef<"qrs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * qrs findUnique
   */
  export type qrsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qrs
     */
    select?: qrsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qrs
     */
    omit?: qrsOmit<ExtArgs> | null
    /**
     * Filter, which qrs to fetch.
     */
    where: qrsWhereUniqueInput
  }

  /**
   * qrs findUniqueOrThrow
   */
  export type qrsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qrs
     */
    select?: qrsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qrs
     */
    omit?: qrsOmit<ExtArgs> | null
    /**
     * Filter, which qrs to fetch.
     */
    where: qrsWhereUniqueInput
  }

  /**
   * qrs findFirst
   */
  export type qrsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qrs
     */
    select?: qrsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qrs
     */
    omit?: qrsOmit<ExtArgs> | null
    /**
     * Filter, which qrs to fetch.
     */
    where?: qrsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qrs to fetch.
     */
    orderBy?: qrsOrderByWithRelationInput | qrsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for qrs.
     */
    cursor?: qrsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of qrs.
     */
    distinct?: QrsScalarFieldEnum | QrsScalarFieldEnum[]
  }

  /**
   * qrs findFirstOrThrow
   */
  export type qrsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qrs
     */
    select?: qrsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qrs
     */
    omit?: qrsOmit<ExtArgs> | null
    /**
     * Filter, which qrs to fetch.
     */
    where?: qrsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qrs to fetch.
     */
    orderBy?: qrsOrderByWithRelationInput | qrsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for qrs.
     */
    cursor?: qrsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of qrs.
     */
    distinct?: QrsScalarFieldEnum | QrsScalarFieldEnum[]
  }

  /**
   * qrs findMany
   */
  export type qrsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qrs
     */
    select?: qrsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qrs
     */
    omit?: qrsOmit<ExtArgs> | null
    /**
     * Filter, which qrs to fetch.
     */
    where?: qrsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qrs to fetch.
     */
    orderBy?: qrsOrderByWithRelationInput | qrsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing qrs.
     */
    cursor?: qrsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qrs.
     */
    skip?: number
    distinct?: QrsScalarFieldEnum | QrsScalarFieldEnum[]
  }

  /**
   * qrs create
   */
  export type qrsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qrs
     */
    select?: qrsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qrs
     */
    omit?: qrsOmit<ExtArgs> | null
    /**
     * The data needed to create a qrs.
     */
    data?: XOR<qrsCreateInput, qrsUncheckedCreateInput>
  }

  /**
   * qrs createMany
   */
  export type qrsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many qrs.
     */
    data: qrsCreateManyInput | qrsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * qrs update
   */
  export type qrsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qrs
     */
    select?: qrsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qrs
     */
    omit?: qrsOmit<ExtArgs> | null
    /**
     * The data needed to update a qrs.
     */
    data: XOR<qrsUpdateInput, qrsUncheckedUpdateInput>
    /**
     * Choose, which qrs to update.
     */
    where: qrsWhereUniqueInput
  }

  /**
   * qrs updateMany
   */
  export type qrsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update qrs.
     */
    data: XOR<qrsUpdateManyMutationInput, qrsUncheckedUpdateManyInput>
    /**
     * Filter which qrs to update
     */
    where?: qrsWhereInput
    /**
     * Limit how many qrs to update.
     */
    limit?: number
  }

  /**
   * qrs upsert
   */
  export type qrsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qrs
     */
    select?: qrsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qrs
     */
    omit?: qrsOmit<ExtArgs> | null
    /**
     * The filter to search for the qrs to update in case it exists.
     */
    where: qrsWhereUniqueInput
    /**
     * In case the qrs found by the `where` argument doesn't exist, create a new qrs with this data.
     */
    create: XOR<qrsCreateInput, qrsUncheckedCreateInput>
    /**
     * In case the qrs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<qrsUpdateInput, qrsUncheckedUpdateInput>
  }

  /**
   * qrs delete
   */
  export type qrsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qrs
     */
    select?: qrsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qrs
     */
    omit?: qrsOmit<ExtArgs> | null
    /**
     * Filter which qrs to delete.
     */
    where: qrsWhereUniqueInput
  }

  /**
   * qrs deleteMany
   */
  export type qrsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which qrs to delete
     */
    where?: qrsWhereInput
    /**
     * Limit how many qrs to delete.
     */
    limit?: number
  }

  /**
   * qrs without action
   */
  export type qrsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the qrs
     */
    select?: qrsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the qrs
     */
    omit?: qrsOmit<ExtArgs> | null
  }


  /**
   * Model reports
   */

  export type AggregateReports = {
    _count: ReportsCountAggregateOutputType | null
    _avg: ReportsAvgAggregateOutputType | null
    _sum: ReportsSumAggregateOutputType | null
    _min: ReportsMinAggregateOutputType | null
    _max: ReportsMaxAggregateOutputType | null
  }

  export type ReportsAvgAggregateOutputType = {
    id: number | null
  }

  export type ReportsSumAggregateOutputType = {
    id: number | null
  }

  export type ReportsMinAggregateOutputType = {
    id: number | null
    type: string | null
    generated_at: Date | null
  }

  export type ReportsMaxAggregateOutputType = {
    id: number | null
    type: string | null
    generated_at: Date | null
  }

  export type ReportsCountAggregateOutputType = {
    id: number
    type: number
    generated_at: number
    _all: number
  }


  export type ReportsAvgAggregateInputType = {
    id?: true
  }

  export type ReportsSumAggregateInputType = {
    id?: true
  }

  export type ReportsMinAggregateInputType = {
    id?: true
    type?: true
    generated_at?: true
  }

  export type ReportsMaxAggregateInputType = {
    id?: true
    type?: true
    generated_at?: true
  }

  export type ReportsCountAggregateInputType = {
    id?: true
    type?: true
    generated_at?: true
    _all?: true
  }

  export type ReportsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reports to aggregate.
     */
    where?: reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reports
    **/
    _count?: true | ReportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportsMaxAggregateInputType
  }

  export type GetReportsAggregateType<T extends ReportsAggregateArgs> = {
        [P in keyof T & keyof AggregateReports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReports[P]>
      : GetScalarType<T[P], AggregateReports[P]>
  }




  export type reportsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportsWhereInput
    orderBy?: reportsOrderByWithAggregationInput | reportsOrderByWithAggregationInput[]
    by: ReportsScalarFieldEnum[] | ReportsScalarFieldEnum
    having?: reportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportsCountAggregateInputType | true
    _avg?: ReportsAvgAggregateInputType
    _sum?: ReportsSumAggregateInputType
    _min?: ReportsMinAggregateInputType
    _max?: ReportsMaxAggregateInputType
  }

  export type ReportsGroupByOutputType = {
    id: number
    type: string | null
    generated_at: Date | null
    _count: ReportsCountAggregateOutputType | null
    _avg: ReportsAvgAggregateOutputType | null
    _sum: ReportsSumAggregateOutputType | null
    _min: ReportsMinAggregateOutputType | null
    _max: ReportsMaxAggregateOutputType | null
  }

  type GetReportsGroupByPayload<T extends reportsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportsGroupByOutputType[P]>
            : GetScalarType<T[P], ReportsGroupByOutputType[P]>
        }
      >
    >


  export type reportsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    generated_at?: boolean
  }, ExtArgs["result"]["reports"]>



  export type reportsSelectScalar = {
    id?: boolean
    type?: boolean
    generated_at?: boolean
  }

  export type reportsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "generated_at", ExtArgs["result"]["reports"]>

  export type $reportsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reports"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string | null
      generated_at: Date | null
    }, ExtArgs["result"]["reports"]>
    composites: {}
  }

  type reportsGetPayload<S extends boolean | null | undefined | reportsDefaultArgs> = $Result.GetResult<Prisma.$reportsPayload, S>

  type reportsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reportsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportsCountAggregateInputType | true
    }

  export interface reportsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reports'], meta: { name: 'reports' } }
    /**
     * Find zero or one Reports that matches the filter.
     * @param {reportsFindUniqueArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reportsFindUniqueArgs>(args: SelectSubset<T, reportsFindUniqueArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reports that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reportsFindUniqueOrThrowArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reportsFindUniqueOrThrowArgs>(args: SelectSubset<T, reportsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsFindFirstArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reportsFindFirstArgs>(args?: SelectSubset<T, reportsFindFirstArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsFindFirstOrThrowArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reportsFindFirstOrThrowArgs>(args?: SelectSubset<T, reportsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.reports.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.reports.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportsWithIdOnly = await prisma.reports.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reportsFindManyArgs>(args?: SelectSubset<T, reportsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reports.
     * @param {reportsCreateArgs} args - Arguments to create a Reports.
     * @example
     * // Create one Reports
     * const Reports = await prisma.reports.create({
     *   data: {
     *     // ... data to create a Reports
     *   }
     * })
     * 
     */
    create<T extends reportsCreateArgs>(args: SelectSubset<T, reportsCreateArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {reportsCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const reports = await prisma.reports.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reportsCreateManyArgs>(args?: SelectSubset<T, reportsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reports.
     * @param {reportsDeleteArgs} args - Arguments to delete one Reports.
     * @example
     * // Delete one Reports
     * const Reports = await prisma.reports.delete({
     *   where: {
     *     // ... filter to delete one Reports
     *   }
     * })
     * 
     */
    delete<T extends reportsDeleteArgs>(args: SelectSubset<T, reportsDeleteArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reports.
     * @param {reportsUpdateArgs} args - Arguments to update one Reports.
     * @example
     * // Update one Reports
     * const reports = await prisma.reports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reportsUpdateArgs>(args: SelectSubset<T, reportsUpdateArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {reportsDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.reports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reportsDeleteManyArgs>(args?: SelectSubset<T, reportsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const reports = await prisma.reports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reportsUpdateManyArgs>(args: SelectSubset<T, reportsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reports.
     * @param {reportsUpsertArgs} args - Arguments to update or create a Reports.
     * @example
     * // Update or create a Reports
     * const reports = await prisma.reports.upsert({
     *   create: {
     *     // ... data to create a Reports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reports we want to update
     *   }
     * })
     */
    upsert<T extends reportsUpsertArgs>(args: SelectSubset<T, reportsUpsertArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.reports.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends reportsCountArgs>(
      args?: Subset<T, reportsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportsAggregateArgs>(args: Subset<T, ReportsAggregateArgs>): Prisma.PrismaPromise<GetReportsAggregateType<T>>

    /**
     * Group by Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reportsGroupByArgs['orderBy'] }
        : { orderBy?: reportsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reportsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reports model
   */
  readonly fields: reportsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reportsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reports model
   */
  interface reportsFieldRefs {
    readonly id: FieldRef<"reports", 'Int'>
    readonly type: FieldRef<"reports", 'String'>
    readonly generated_at: FieldRef<"reports", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reports findUnique
   */
  export type reportsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where: reportsWhereUniqueInput
  }

  /**
   * reports findUniqueOrThrow
   */
  export type reportsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where: reportsWhereUniqueInput
  }

  /**
   * reports findFirst
   */
  export type reportsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * reports findFirstOrThrow
   */
  export type reportsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * reports findMany
   */
  export type reportsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reports.
     */
    cursor?: reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * reports create
   */
  export type reportsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * The data needed to create a reports.
     */
    data?: XOR<reportsCreateInput, reportsUncheckedCreateInput>
  }

  /**
   * reports createMany
   */
  export type reportsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reports.
     */
    data: reportsCreateManyInput | reportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reports update
   */
  export type reportsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * The data needed to update a reports.
     */
    data: XOR<reportsUpdateInput, reportsUncheckedUpdateInput>
    /**
     * Choose, which reports to update.
     */
    where: reportsWhereUniqueInput
  }

  /**
   * reports updateMany
   */
  export type reportsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reports.
     */
    data: XOR<reportsUpdateManyMutationInput, reportsUncheckedUpdateManyInput>
    /**
     * Filter which reports to update
     */
    where?: reportsWhereInput
    /**
     * Limit how many reports to update.
     */
    limit?: number
  }

  /**
   * reports upsert
   */
  export type reportsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * The filter to search for the reports to update in case it exists.
     */
    where: reportsWhereUniqueInput
    /**
     * In case the reports found by the `where` argument doesn't exist, create a new reports with this data.
     */
    create: XOR<reportsCreateInput, reportsUncheckedCreateInput>
    /**
     * In case the reports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reportsUpdateInput, reportsUncheckedUpdateInput>
  }

  /**
   * reports delete
   */
  export type reportsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Filter which reports to delete.
     */
    where: reportsWhereUniqueInput
  }

  /**
   * reports deleteMany
   */
  export type reportsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reports to delete
     */
    where?: reportsWhereInput
    /**
     * Limit how many reports to delete.
     */
    limit?: number
  }

  /**
   * reports without action
   */
  export type reportsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
  }


  /**
   * Model rfid_access
   */

  export type AggregateRfid_access = {
    _count: Rfid_accessCountAggregateOutputType | null
    _avg: Rfid_accessAvgAggregateOutputType | null
    _sum: Rfid_accessSumAggregateOutputType | null
    _min: Rfid_accessMinAggregateOutputType | null
    _max: Rfid_accessMaxAggregateOutputType | null
  }

  export type Rfid_accessAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Rfid_accessSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Rfid_accessMinAggregateOutputType = {
    id: number | null
    rfid_code: string | null
    entry_date: Date | null
    exit_date: Date | null
    user_id: number | null
  }

  export type Rfid_accessMaxAggregateOutputType = {
    id: number | null
    rfid_code: string | null
    entry_date: Date | null
    exit_date: Date | null
    user_id: number | null
  }

  export type Rfid_accessCountAggregateOutputType = {
    id: number
    rfid_code: number
    entry_date: number
    exit_date: number
    user_id: number
    _all: number
  }


  export type Rfid_accessAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Rfid_accessSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Rfid_accessMinAggregateInputType = {
    id?: true
    rfid_code?: true
    entry_date?: true
    exit_date?: true
    user_id?: true
  }

  export type Rfid_accessMaxAggregateInputType = {
    id?: true
    rfid_code?: true
    entry_date?: true
    exit_date?: true
    user_id?: true
  }

  export type Rfid_accessCountAggregateInputType = {
    id?: true
    rfid_code?: true
    entry_date?: true
    exit_date?: true
    user_id?: true
    _all?: true
  }

  export type Rfid_accessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rfid_access to aggregate.
     */
    where?: rfid_accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rfid_accesses to fetch.
     */
    orderBy?: rfid_accessOrderByWithRelationInput | rfid_accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rfid_accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rfid_accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rfid_accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rfid_accesses
    **/
    _count?: true | Rfid_accessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rfid_accessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rfid_accessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rfid_accessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rfid_accessMaxAggregateInputType
  }

  export type GetRfid_accessAggregateType<T extends Rfid_accessAggregateArgs> = {
        [P in keyof T & keyof AggregateRfid_access]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRfid_access[P]>
      : GetScalarType<T[P], AggregateRfid_access[P]>
  }




  export type rfid_accessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rfid_accessWhereInput
    orderBy?: rfid_accessOrderByWithAggregationInput | rfid_accessOrderByWithAggregationInput[]
    by: Rfid_accessScalarFieldEnum[] | Rfid_accessScalarFieldEnum
    having?: rfid_accessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rfid_accessCountAggregateInputType | true
    _avg?: Rfid_accessAvgAggregateInputType
    _sum?: Rfid_accessSumAggregateInputType
    _min?: Rfid_accessMinAggregateInputType
    _max?: Rfid_accessMaxAggregateInputType
  }

  export type Rfid_accessGroupByOutputType = {
    id: number
    rfid_code: string
    entry_date: Date | null
    exit_date: Date | null
    user_id: number | null
    _count: Rfid_accessCountAggregateOutputType | null
    _avg: Rfid_accessAvgAggregateOutputType | null
    _sum: Rfid_accessSumAggregateOutputType | null
    _min: Rfid_accessMinAggregateOutputType | null
    _max: Rfid_accessMaxAggregateOutputType | null
  }

  type GetRfid_accessGroupByPayload<T extends rfid_accessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rfid_accessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rfid_accessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rfid_accessGroupByOutputType[P]>
            : GetScalarType<T[P], Rfid_accessGroupByOutputType[P]>
        }
      >
    >


  export type rfid_accessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rfid_code?: boolean
    entry_date?: boolean
    exit_date?: boolean
    user_id?: boolean
    users?: boolean | rfid_access$usersArgs<ExtArgs>
  }, ExtArgs["result"]["rfid_access"]>



  export type rfid_accessSelectScalar = {
    id?: boolean
    rfid_code?: boolean
    entry_date?: boolean
    exit_date?: boolean
    user_id?: boolean
  }

  export type rfid_accessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rfid_code" | "entry_date" | "exit_date" | "user_id", ExtArgs["result"]["rfid_access"]>
  export type rfid_accessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | rfid_access$usersArgs<ExtArgs>
  }

  export type $rfid_accessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rfid_access"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rfid_code: string
      entry_date: Date | null
      exit_date: Date | null
      user_id: number | null
    }, ExtArgs["result"]["rfid_access"]>
    composites: {}
  }

  type rfid_accessGetPayload<S extends boolean | null | undefined | rfid_accessDefaultArgs> = $Result.GetResult<Prisma.$rfid_accessPayload, S>

  type rfid_accessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rfid_accessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rfid_accessCountAggregateInputType | true
    }

  export interface rfid_accessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rfid_access'], meta: { name: 'rfid_access' } }
    /**
     * Find zero or one Rfid_access that matches the filter.
     * @param {rfid_accessFindUniqueArgs} args - Arguments to find a Rfid_access
     * @example
     * // Get one Rfid_access
     * const rfid_access = await prisma.rfid_access.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rfid_accessFindUniqueArgs>(args: SelectSubset<T, rfid_accessFindUniqueArgs<ExtArgs>>): Prisma__rfid_accessClient<$Result.GetResult<Prisma.$rfid_accessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rfid_access that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rfid_accessFindUniqueOrThrowArgs} args - Arguments to find a Rfid_access
     * @example
     * // Get one Rfid_access
     * const rfid_access = await prisma.rfid_access.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rfid_accessFindUniqueOrThrowArgs>(args: SelectSubset<T, rfid_accessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rfid_accessClient<$Result.GetResult<Prisma.$rfid_accessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rfid_access that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rfid_accessFindFirstArgs} args - Arguments to find a Rfid_access
     * @example
     * // Get one Rfid_access
     * const rfid_access = await prisma.rfid_access.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rfid_accessFindFirstArgs>(args?: SelectSubset<T, rfid_accessFindFirstArgs<ExtArgs>>): Prisma__rfid_accessClient<$Result.GetResult<Prisma.$rfid_accessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rfid_access that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rfid_accessFindFirstOrThrowArgs} args - Arguments to find a Rfid_access
     * @example
     * // Get one Rfid_access
     * const rfid_access = await prisma.rfid_access.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rfid_accessFindFirstOrThrowArgs>(args?: SelectSubset<T, rfid_accessFindFirstOrThrowArgs<ExtArgs>>): Prisma__rfid_accessClient<$Result.GetResult<Prisma.$rfid_accessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rfid_accesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rfid_accessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rfid_accesses
     * const rfid_accesses = await prisma.rfid_access.findMany()
     * 
     * // Get first 10 Rfid_accesses
     * const rfid_accesses = await prisma.rfid_access.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rfid_accessWithIdOnly = await prisma.rfid_access.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rfid_accessFindManyArgs>(args?: SelectSubset<T, rfid_accessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rfid_accessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rfid_access.
     * @param {rfid_accessCreateArgs} args - Arguments to create a Rfid_access.
     * @example
     * // Create one Rfid_access
     * const Rfid_access = await prisma.rfid_access.create({
     *   data: {
     *     // ... data to create a Rfid_access
     *   }
     * })
     * 
     */
    create<T extends rfid_accessCreateArgs>(args: SelectSubset<T, rfid_accessCreateArgs<ExtArgs>>): Prisma__rfid_accessClient<$Result.GetResult<Prisma.$rfid_accessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rfid_accesses.
     * @param {rfid_accessCreateManyArgs} args - Arguments to create many Rfid_accesses.
     * @example
     * // Create many Rfid_accesses
     * const rfid_access = await prisma.rfid_access.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rfid_accessCreateManyArgs>(args?: SelectSubset<T, rfid_accessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rfid_access.
     * @param {rfid_accessDeleteArgs} args - Arguments to delete one Rfid_access.
     * @example
     * // Delete one Rfid_access
     * const Rfid_access = await prisma.rfid_access.delete({
     *   where: {
     *     // ... filter to delete one Rfid_access
     *   }
     * })
     * 
     */
    delete<T extends rfid_accessDeleteArgs>(args: SelectSubset<T, rfid_accessDeleteArgs<ExtArgs>>): Prisma__rfid_accessClient<$Result.GetResult<Prisma.$rfid_accessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rfid_access.
     * @param {rfid_accessUpdateArgs} args - Arguments to update one Rfid_access.
     * @example
     * // Update one Rfid_access
     * const rfid_access = await prisma.rfid_access.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rfid_accessUpdateArgs>(args: SelectSubset<T, rfid_accessUpdateArgs<ExtArgs>>): Prisma__rfid_accessClient<$Result.GetResult<Prisma.$rfid_accessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rfid_accesses.
     * @param {rfid_accessDeleteManyArgs} args - Arguments to filter Rfid_accesses to delete.
     * @example
     * // Delete a few Rfid_accesses
     * const { count } = await prisma.rfid_access.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rfid_accessDeleteManyArgs>(args?: SelectSubset<T, rfid_accessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rfid_accesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rfid_accessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rfid_accesses
     * const rfid_access = await prisma.rfid_access.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rfid_accessUpdateManyArgs>(args: SelectSubset<T, rfid_accessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rfid_access.
     * @param {rfid_accessUpsertArgs} args - Arguments to update or create a Rfid_access.
     * @example
     * // Update or create a Rfid_access
     * const rfid_access = await prisma.rfid_access.upsert({
     *   create: {
     *     // ... data to create a Rfid_access
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rfid_access we want to update
     *   }
     * })
     */
    upsert<T extends rfid_accessUpsertArgs>(args: SelectSubset<T, rfid_accessUpsertArgs<ExtArgs>>): Prisma__rfid_accessClient<$Result.GetResult<Prisma.$rfid_accessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rfid_accesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rfid_accessCountArgs} args - Arguments to filter Rfid_accesses to count.
     * @example
     * // Count the number of Rfid_accesses
     * const count = await prisma.rfid_access.count({
     *   where: {
     *     // ... the filter for the Rfid_accesses we want to count
     *   }
     * })
    **/
    count<T extends rfid_accessCountArgs>(
      args?: Subset<T, rfid_accessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rfid_accessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rfid_access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rfid_accessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rfid_accessAggregateArgs>(args: Subset<T, Rfid_accessAggregateArgs>): Prisma.PrismaPromise<GetRfid_accessAggregateType<T>>

    /**
     * Group by Rfid_access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rfid_accessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rfid_accessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rfid_accessGroupByArgs['orderBy'] }
        : { orderBy?: rfid_accessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rfid_accessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRfid_accessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rfid_access model
   */
  readonly fields: rfid_accessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rfid_access.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rfid_accessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends rfid_access$usersArgs<ExtArgs> = {}>(args?: Subset<T, rfid_access$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rfid_access model
   */
  interface rfid_accessFieldRefs {
    readonly id: FieldRef<"rfid_access", 'Int'>
    readonly rfid_code: FieldRef<"rfid_access", 'String'>
    readonly entry_date: FieldRef<"rfid_access", 'DateTime'>
    readonly exit_date: FieldRef<"rfid_access", 'DateTime'>
    readonly user_id: FieldRef<"rfid_access", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * rfid_access findUnique
   */
  export type rfid_accessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid_access
     */
    select?: rfid_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid_access
     */
    omit?: rfid_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rfid_accessInclude<ExtArgs> | null
    /**
     * Filter, which rfid_access to fetch.
     */
    where: rfid_accessWhereUniqueInput
  }

  /**
   * rfid_access findUniqueOrThrow
   */
  export type rfid_accessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid_access
     */
    select?: rfid_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid_access
     */
    omit?: rfid_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rfid_accessInclude<ExtArgs> | null
    /**
     * Filter, which rfid_access to fetch.
     */
    where: rfid_accessWhereUniqueInput
  }

  /**
   * rfid_access findFirst
   */
  export type rfid_accessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid_access
     */
    select?: rfid_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid_access
     */
    omit?: rfid_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rfid_accessInclude<ExtArgs> | null
    /**
     * Filter, which rfid_access to fetch.
     */
    where?: rfid_accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rfid_accesses to fetch.
     */
    orderBy?: rfid_accessOrderByWithRelationInput | rfid_accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rfid_accesses.
     */
    cursor?: rfid_accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rfid_accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rfid_accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rfid_accesses.
     */
    distinct?: Rfid_accessScalarFieldEnum | Rfid_accessScalarFieldEnum[]
  }

  /**
   * rfid_access findFirstOrThrow
   */
  export type rfid_accessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid_access
     */
    select?: rfid_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid_access
     */
    omit?: rfid_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rfid_accessInclude<ExtArgs> | null
    /**
     * Filter, which rfid_access to fetch.
     */
    where?: rfid_accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rfid_accesses to fetch.
     */
    orderBy?: rfid_accessOrderByWithRelationInput | rfid_accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rfid_accesses.
     */
    cursor?: rfid_accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rfid_accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rfid_accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rfid_accesses.
     */
    distinct?: Rfid_accessScalarFieldEnum | Rfid_accessScalarFieldEnum[]
  }

  /**
   * rfid_access findMany
   */
  export type rfid_accessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid_access
     */
    select?: rfid_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid_access
     */
    omit?: rfid_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rfid_accessInclude<ExtArgs> | null
    /**
     * Filter, which rfid_accesses to fetch.
     */
    where?: rfid_accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rfid_accesses to fetch.
     */
    orderBy?: rfid_accessOrderByWithRelationInput | rfid_accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rfid_accesses.
     */
    cursor?: rfid_accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rfid_accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rfid_accesses.
     */
    skip?: number
    distinct?: Rfid_accessScalarFieldEnum | Rfid_accessScalarFieldEnum[]
  }

  /**
   * rfid_access create
   */
  export type rfid_accessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid_access
     */
    select?: rfid_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid_access
     */
    omit?: rfid_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rfid_accessInclude<ExtArgs> | null
    /**
     * The data needed to create a rfid_access.
     */
    data: XOR<rfid_accessCreateInput, rfid_accessUncheckedCreateInput>
  }

  /**
   * rfid_access createMany
   */
  export type rfid_accessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rfid_accesses.
     */
    data: rfid_accessCreateManyInput | rfid_accessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rfid_access update
   */
  export type rfid_accessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid_access
     */
    select?: rfid_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid_access
     */
    omit?: rfid_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rfid_accessInclude<ExtArgs> | null
    /**
     * The data needed to update a rfid_access.
     */
    data: XOR<rfid_accessUpdateInput, rfid_accessUncheckedUpdateInput>
    /**
     * Choose, which rfid_access to update.
     */
    where: rfid_accessWhereUniqueInput
  }

  /**
   * rfid_access updateMany
   */
  export type rfid_accessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rfid_accesses.
     */
    data: XOR<rfid_accessUpdateManyMutationInput, rfid_accessUncheckedUpdateManyInput>
    /**
     * Filter which rfid_accesses to update
     */
    where?: rfid_accessWhereInput
    /**
     * Limit how many rfid_accesses to update.
     */
    limit?: number
  }

  /**
   * rfid_access upsert
   */
  export type rfid_accessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid_access
     */
    select?: rfid_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid_access
     */
    omit?: rfid_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rfid_accessInclude<ExtArgs> | null
    /**
     * The filter to search for the rfid_access to update in case it exists.
     */
    where: rfid_accessWhereUniqueInput
    /**
     * In case the rfid_access found by the `where` argument doesn't exist, create a new rfid_access with this data.
     */
    create: XOR<rfid_accessCreateInput, rfid_accessUncheckedCreateInput>
    /**
     * In case the rfid_access was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rfid_accessUpdateInput, rfid_accessUncheckedUpdateInput>
  }

  /**
   * rfid_access delete
   */
  export type rfid_accessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid_access
     */
    select?: rfid_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid_access
     */
    omit?: rfid_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rfid_accessInclude<ExtArgs> | null
    /**
     * Filter which rfid_access to delete.
     */
    where: rfid_accessWhereUniqueInput
  }

  /**
   * rfid_access deleteMany
   */
  export type rfid_accessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rfid_accesses to delete
     */
    where?: rfid_accessWhereInput
    /**
     * Limit how many rfid_accesses to delete.
     */
    limit?: number
  }

  /**
   * rfid_access.users
   */
  export type rfid_access$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * rfid_access without action
   */
  export type rfid_accessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid_access
     */
    select?: rfid_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid_access
     */
    omit?: rfid_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rfid_accessInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    lastname: string | null
    email: string | null
    password: string | null
    role: $Enums.users_role | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    lastname: string | null
    email: string | null
    password: string | null
    role: $Enums.users_role | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    lastname: number
    email: number
    password: number
    role: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
    email?: true
    password?: true
    role?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
    email?: true
    password?: true
    role?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
    email?: true
    password?: true
    role?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    lastname: string
    email: string
    password: string
    role: $Enums.users_role
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    memberships?: boolean | users$membershipsArgs<ExtArgs>
    rfid_access?: boolean | users$rfid_accessArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastname" | "email" | "password" | "role" | "status" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | users$membershipsArgs<ExtArgs>
    rfid_access?: boolean | users$rfid_accessArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      memberships: Prisma.$membershipsPayload<ExtArgs>[]
      rfid_access: Prisma.$rfid_accessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      lastname: string
      email: string
      password: string
      role: $Enums.users_role
      status: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memberships<T extends users$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, users$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rfid_access<T extends users$rfid_accessArgs<ExtArgs> = {}>(args?: Subset<T, users$rfid_accessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rfid_accessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly lastname: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'users_role'>
    readonly status: FieldRef<"users", 'Boolean'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.memberships
   */
  export type users$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    where?: membershipsWhereInput
    orderBy?: membershipsOrderByWithRelationInput | membershipsOrderByWithRelationInput[]
    cursor?: membershipsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipsScalarFieldEnum | MembershipsScalarFieldEnum[]
  }

  /**
   * users.rfid_access
   */
  export type users$rfid_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid_access
     */
    select?: rfid_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid_access
     */
    omit?: rfid_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rfid_accessInclude<ExtArgs> | null
    where?: rfid_accessWhereInput
    orderBy?: rfid_accessOrderByWithRelationInput | rfid_accessOrderByWithRelationInput[]
    cursor?: rfid_accessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rfid_accessScalarFieldEnum | Rfid_accessScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BranchesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    services: 'services',
    created_at: 'created_at'
  };

  export type BranchesScalarFieldEnum = (typeof BranchesScalarFieldEnum)[keyof typeof BranchesScalarFieldEnum]


  export const MembershipsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    duration: 'duration',
    start_date: 'start_date',
    end_date: 'end_date',
    price: 'price',
    status: 'status',
    user_id: 'user_id'
  };

  export type MembershipsScalarFieldEnum = (typeof MembershipsScalarFieldEnum)[keyof typeof MembershipsScalarFieldEnum]


  export const QrsScalarFieldEnum: {
    id: 'id',
    image: 'image',
    generated_at: 'generated_at',
    description: 'description'
  };

  export type QrsScalarFieldEnum = (typeof QrsScalarFieldEnum)[keyof typeof QrsScalarFieldEnum]


  export const ReportsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    generated_at: 'generated_at'
  };

  export type ReportsScalarFieldEnum = (typeof ReportsScalarFieldEnum)[keyof typeof ReportsScalarFieldEnum]


  export const Rfid_accessScalarFieldEnum: {
    id: 'id',
    rfid_code: 'rfid_code',
    entry_date: 'entry_date',
    exit_date: 'exit_date',
    user_id: 'user_id'
  };

  export type Rfid_accessScalarFieldEnum = (typeof Rfid_accessScalarFieldEnum)[keyof typeof Rfid_accessScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const branchesOrderByRelevanceFieldEnum: {
    name: 'name',
    address: 'address',
    services: 'services'
  };

  export type branchesOrderByRelevanceFieldEnum = (typeof branchesOrderByRelevanceFieldEnum)[keyof typeof branchesOrderByRelevanceFieldEnum]


  export const membershipsOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    duration: 'duration'
  };

  export type membershipsOrderByRelevanceFieldEnum = (typeof membershipsOrderByRelevanceFieldEnum)[keyof typeof membershipsOrderByRelevanceFieldEnum]


  export const qrsOrderByRelevanceFieldEnum: {
    image: 'image',
    description: 'description'
  };

  export type qrsOrderByRelevanceFieldEnum = (typeof qrsOrderByRelevanceFieldEnum)[keyof typeof qrsOrderByRelevanceFieldEnum]


  export const reportsOrderByRelevanceFieldEnum: {
    type: 'type'
  };

  export type reportsOrderByRelevanceFieldEnum = (typeof reportsOrderByRelevanceFieldEnum)[keyof typeof reportsOrderByRelevanceFieldEnum]


  export const rfid_accessOrderByRelevanceFieldEnum: {
    rfid_code: 'rfid_code'
  };

  export type rfid_accessOrderByRelevanceFieldEnum = (typeof rfid_accessOrderByRelevanceFieldEnum)[keyof typeof rfid_accessOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    name: 'name',
    lastname: 'lastname',
    email: 'email',
    password: 'password'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'users_role'
   */
  export type Enumusers_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_role'>
    
  /**
   * Deep Input Types
   */


  export type branchesWhereInput = {
    AND?: branchesWhereInput | branchesWhereInput[]
    OR?: branchesWhereInput[]
    NOT?: branchesWhereInput | branchesWhereInput[]
    id?: IntFilter<"branches"> | number
    name?: StringFilter<"branches"> | string
    address?: StringNullableFilter<"branches"> | string | null
    latitude?: FloatNullableFilter<"branches"> | number | null
    longitude?: FloatNullableFilter<"branches"> | number | null
    services?: StringNullableFilter<"branches"> | string | null
    created_at?: DateTimeNullableFilter<"branches"> | Date | string | null
  }

  export type branchesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    services?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _relevance?: branchesOrderByRelevanceInput
  }

  export type branchesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: branchesWhereInput | branchesWhereInput[]
    OR?: branchesWhereInput[]
    NOT?: branchesWhereInput | branchesWhereInput[]
    name?: StringFilter<"branches"> | string
    address?: StringNullableFilter<"branches"> | string | null
    latitude?: FloatNullableFilter<"branches"> | number | null
    longitude?: FloatNullableFilter<"branches"> | number | null
    services?: StringNullableFilter<"branches"> | string | null
    created_at?: DateTimeNullableFilter<"branches"> | Date | string | null
  }, "id">

  export type branchesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    services?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: branchesCountOrderByAggregateInput
    _avg?: branchesAvgOrderByAggregateInput
    _max?: branchesMaxOrderByAggregateInput
    _min?: branchesMinOrderByAggregateInput
    _sum?: branchesSumOrderByAggregateInput
  }

  export type branchesScalarWhereWithAggregatesInput = {
    AND?: branchesScalarWhereWithAggregatesInput | branchesScalarWhereWithAggregatesInput[]
    OR?: branchesScalarWhereWithAggregatesInput[]
    NOT?: branchesScalarWhereWithAggregatesInput | branchesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"branches"> | number
    name?: StringWithAggregatesFilter<"branches"> | string
    address?: StringNullableWithAggregatesFilter<"branches"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"branches"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"branches"> | number | null
    services?: StringNullableWithAggregatesFilter<"branches"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"branches"> | Date | string | null
  }

  export type membershipsWhereInput = {
    AND?: membershipsWhereInput | membershipsWhereInput[]
    OR?: membershipsWhereInput[]
    NOT?: membershipsWhereInput | membershipsWhereInput[]
    id?: IntFilter<"memberships"> | number
    name?: StringFilter<"memberships"> | string
    description?: StringNullableFilter<"memberships"> | string | null
    duration?: StringNullableFilter<"memberships"> | string | null
    start_date?: DateTimeNullableFilter<"memberships"> | Date | string | null
    end_date?: DateTimeNullableFilter<"memberships"> | Date | string | null
    price?: FloatNullableFilter<"memberships"> | number | null
    status?: BoolNullableFilter<"memberships"> | boolean | null
    user_id?: IntNullableFilter<"memberships"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type membershipsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    _relevance?: membershipsOrderByRelevanceInput
  }

  export type membershipsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: membershipsWhereInput | membershipsWhereInput[]
    OR?: membershipsWhereInput[]
    NOT?: membershipsWhereInput | membershipsWhereInput[]
    name?: StringFilter<"memberships"> | string
    description?: StringNullableFilter<"memberships"> | string | null
    duration?: StringNullableFilter<"memberships"> | string | null
    start_date?: DateTimeNullableFilter<"memberships"> | Date | string | null
    end_date?: DateTimeNullableFilter<"memberships"> | Date | string | null
    price?: FloatNullableFilter<"memberships"> | number | null
    status?: BoolNullableFilter<"memberships"> | boolean | null
    user_id?: IntNullableFilter<"memberships"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type membershipsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: membershipsCountOrderByAggregateInput
    _avg?: membershipsAvgOrderByAggregateInput
    _max?: membershipsMaxOrderByAggregateInput
    _min?: membershipsMinOrderByAggregateInput
    _sum?: membershipsSumOrderByAggregateInput
  }

  export type membershipsScalarWhereWithAggregatesInput = {
    AND?: membershipsScalarWhereWithAggregatesInput | membershipsScalarWhereWithAggregatesInput[]
    OR?: membershipsScalarWhereWithAggregatesInput[]
    NOT?: membershipsScalarWhereWithAggregatesInput | membershipsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"memberships"> | number
    name?: StringWithAggregatesFilter<"memberships"> | string
    description?: StringNullableWithAggregatesFilter<"memberships"> | string | null
    duration?: StringNullableWithAggregatesFilter<"memberships"> | string | null
    start_date?: DateTimeNullableWithAggregatesFilter<"memberships"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"memberships"> | Date | string | null
    price?: FloatNullableWithAggregatesFilter<"memberships"> | number | null
    status?: BoolNullableWithAggregatesFilter<"memberships"> | boolean | null
    user_id?: IntNullableWithAggregatesFilter<"memberships"> | number | null
  }

  export type qrsWhereInput = {
    AND?: qrsWhereInput | qrsWhereInput[]
    OR?: qrsWhereInput[]
    NOT?: qrsWhereInput | qrsWhereInput[]
    id?: IntFilter<"qrs"> | number
    image?: StringNullableFilter<"qrs"> | string | null
    generated_at?: DateTimeNullableFilter<"qrs"> | Date | string | null
    description?: StringNullableFilter<"qrs"> | string | null
  }

  export type qrsOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrderInput | SortOrder
    generated_at?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _relevance?: qrsOrderByRelevanceInput
  }

  export type qrsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: qrsWhereInput | qrsWhereInput[]
    OR?: qrsWhereInput[]
    NOT?: qrsWhereInput | qrsWhereInput[]
    image?: StringNullableFilter<"qrs"> | string | null
    generated_at?: DateTimeNullableFilter<"qrs"> | Date | string | null
    description?: StringNullableFilter<"qrs"> | string | null
  }, "id">

  export type qrsOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrderInput | SortOrder
    generated_at?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: qrsCountOrderByAggregateInput
    _avg?: qrsAvgOrderByAggregateInput
    _max?: qrsMaxOrderByAggregateInput
    _min?: qrsMinOrderByAggregateInput
    _sum?: qrsSumOrderByAggregateInput
  }

  export type qrsScalarWhereWithAggregatesInput = {
    AND?: qrsScalarWhereWithAggregatesInput | qrsScalarWhereWithAggregatesInput[]
    OR?: qrsScalarWhereWithAggregatesInput[]
    NOT?: qrsScalarWhereWithAggregatesInput | qrsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"qrs"> | number
    image?: StringNullableWithAggregatesFilter<"qrs"> | string | null
    generated_at?: DateTimeNullableWithAggregatesFilter<"qrs"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"qrs"> | string | null
  }

  export type reportsWhereInput = {
    AND?: reportsWhereInput | reportsWhereInput[]
    OR?: reportsWhereInput[]
    NOT?: reportsWhereInput | reportsWhereInput[]
    id?: IntFilter<"reports"> | number
    type?: StringNullableFilter<"reports"> | string | null
    generated_at?: DateTimeNullableFilter<"reports"> | Date | string | null
  }

  export type reportsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    generated_at?: SortOrderInput | SortOrder
    _relevance?: reportsOrderByRelevanceInput
  }

  export type reportsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: reportsWhereInput | reportsWhereInput[]
    OR?: reportsWhereInput[]
    NOT?: reportsWhereInput | reportsWhereInput[]
    type?: StringNullableFilter<"reports"> | string | null
    generated_at?: DateTimeNullableFilter<"reports"> | Date | string | null
  }, "id">

  export type reportsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    generated_at?: SortOrderInput | SortOrder
    _count?: reportsCountOrderByAggregateInput
    _avg?: reportsAvgOrderByAggregateInput
    _max?: reportsMaxOrderByAggregateInput
    _min?: reportsMinOrderByAggregateInput
    _sum?: reportsSumOrderByAggregateInput
  }

  export type reportsScalarWhereWithAggregatesInput = {
    AND?: reportsScalarWhereWithAggregatesInput | reportsScalarWhereWithAggregatesInput[]
    OR?: reportsScalarWhereWithAggregatesInput[]
    NOT?: reportsScalarWhereWithAggregatesInput | reportsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reports"> | number
    type?: StringNullableWithAggregatesFilter<"reports"> | string | null
    generated_at?: DateTimeNullableWithAggregatesFilter<"reports"> | Date | string | null
  }

  export type rfid_accessWhereInput = {
    AND?: rfid_accessWhereInput | rfid_accessWhereInput[]
    OR?: rfid_accessWhereInput[]
    NOT?: rfid_accessWhereInput | rfid_accessWhereInput[]
    id?: IntFilter<"rfid_access"> | number
    rfid_code?: StringFilter<"rfid_access"> | string
    entry_date?: DateTimeNullableFilter<"rfid_access"> | Date | string | null
    exit_date?: DateTimeNullableFilter<"rfid_access"> | Date | string | null
    user_id?: IntNullableFilter<"rfid_access"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type rfid_accessOrderByWithRelationInput = {
    id?: SortOrder
    rfid_code?: SortOrder
    entry_date?: SortOrderInput | SortOrder
    exit_date?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    _relevance?: rfid_accessOrderByRelevanceInput
  }

  export type rfid_accessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rfid_code?: string
    AND?: rfid_accessWhereInput | rfid_accessWhereInput[]
    OR?: rfid_accessWhereInput[]
    NOT?: rfid_accessWhereInput | rfid_accessWhereInput[]
    entry_date?: DateTimeNullableFilter<"rfid_access"> | Date | string | null
    exit_date?: DateTimeNullableFilter<"rfid_access"> | Date | string | null
    user_id?: IntNullableFilter<"rfid_access"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id" | "rfid_code">

  export type rfid_accessOrderByWithAggregationInput = {
    id?: SortOrder
    rfid_code?: SortOrder
    entry_date?: SortOrderInput | SortOrder
    exit_date?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: rfid_accessCountOrderByAggregateInput
    _avg?: rfid_accessAvgOrderByAggregateInput
    _max?: rfid_accessMaxOrderByAggregateInput
    _min?: rfid_accessMinOrderByAggregateInput
    _sum?: rfid_accessSumOrderByAggregateInput
  }

  export type rfid_accessScalarWhereWithAggregatesInput = {
    AND?: rfid_accessScalarWhereWithAggregatesInput | rfid_accessScalarWhereWithAggregatesInput[]
    OR?: rfid_accessScalarWhereWithAggregatesInput[]
    NOT?: rfid_accessScalarWhereWithAggregatesInput | rfid_accessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rfid_access"> | number
    rfid_code?: StringWithAggregatesFilter<"rfid_access"> | string
    entry_date?: DateTimeNullableWithAggregatesFilter<"rfid_access"> | Date | string | null
    exit_date?: DateTimeNullableWithAggregatesFilter<"rfid_access"> | Date | string | null
    user_id?: IntNullableWithAggregatesFilter<"rfid_access"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    lastname?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: Enumusers_roleFilter<"users"> | $Enums.users_role
    status?: BoolNullableFilter<"users"> | boolean | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    memberships?: MembershipsListRelationFilter
    rfid_access?: Rfid_accessListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    memberships?: membershipsOrderByRelationAggregateInput
    rfid_access?: rfid_accessOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    lastname?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: Enumusers_roleFilter<"users"> | $Enums.users_role
    status?: BoolNullableFilter<"users"> | boolean | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    memberships?: MembershipsListRelationFilter
    rfid_access?: Rfid_accessListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    lastname?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: Enumusers_roleWithAggregatesFilter<"users"> | $Enums.users_role
    status?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type branchesCreateInput = {
    name: string
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    services?: string | null
    created_at?: Date | string | null
  }

  export type branchesUncheckedCreateInput = {
    id?: number
    name: string
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    services?: string | null
    created_at?: Date | string | null
  }

  export type branchesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    services?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type branchesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    services?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type branchesCreateManyInput = {
    id?: number
    name: string
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    services?: string | null
    created_at?: Date | string | null
  }

  export type branchesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    services?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type branchesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    services?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type membershipsCreateInput = {
    name: string
    description?: string | null
    duration?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    price?: number | null
    status?: boolean | null
    users?: usersCreateNestedOneWithoutMembershipsInput
  }

  export type membershipsUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    duration?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    price?: number | null
    status?: boolean | null
    user_id?: number | null
  }

  export type membershipsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: usersUpdateOneWithoutMembershipsNestedInput
  }

  export type membershipsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type membershipsCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    duration?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    price?: number | null
    status?: boolean | null
    user_id?: number | null
  }

  export type membershipsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type membershipsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type qrsCreateInput = {
    image?: string | null
    generated_at?: Date | string | null
    description?: string | null
  }

  export type qrsUncheckedCreateInput = {
    id?: number
    image?: string | null
    generated_at?: Date | string | null
    description?: string | null
  }

  export type qrsUpdateInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type qrsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type qrsCreateManyInput = {
    id?: number
    image?: string | null
    generated_at?: Date | string | null
    description?: string | null
  }

  export type qrsUpdateManyMutationInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type qrsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reportsCreateInput = {
    type?: string | null
    generated_at?: Date | string | null
  }

  export type reportsUncheckedCreateInput = {
    id?: number
    type?: string | null
    generated_at?: Date | string | null
  }

  export type reportsUpdateInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportsCreateManyInput = {
    id?: number
    type?: string | null
    generated_at?: Date | string | null
  }

  export type reportsUpdateManyMutationInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    generated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rfid_accessCreateInput = {
    rfid_code: string
    entry_date?: Date | string | null
    exit_date?: Date | string | null
    users?: usersCreateNestedOneWithoutRfid_accessInput
  }

  export type rfid_accessUncheckedCreateInput = {
    id?: number
    rfid_code: string
    entry_date?: Date | string | null
    exit_date?: Date | string | null
    user_id?: number | null
  }

  export type rfid_accessUpdateInput = {
    rfid_code?: StringFieldUpdateOperationsInput | string
    entry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutRfid_accessNestedInput
  }

  export type rfid_accessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfid_code?: StringFieldUpdateOperationsInput | string
    entry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type rfid_accessCreateManyInput = {
    id?: number
    rfid_code: string
    entry_date?: Date | string | null
    exit_date?: Date | string | null
    user_id?: number | null
  }

  export type rfid_accessUpdateManyMutationInput = {
    rfid_code?: StringFieldUpdateOperationsInput | string
    entry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rfid_accessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfid_code?: StringFieldUpdateOperationsInput | string
    entry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    name: string
    lastname: string
    email: string
    password: string
    role: $Enums.users_role
    status?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    memberships?: membershipsCreateNestedManyWithoutUsersInput
    rfid_access?: rfid_accessCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    lastname: string
    email: string
    password: string
    role: $Enums.users_role
    status?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    memberships?: membershipsUncheckedCreateNestedManyWithoutUsersInput
    rfid_access?: rfid_accessUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memberships?: membershipsUpdateManyWithoutUsersNestedInput
    rfid_access?: rfid_accessUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memberships?: membershipsUncheckedUpdateManyWithoutUsersNestedInput
    rfid_access?: rfid_accessUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    lastname: string
    email: string
    password: string
    role: $Enums.users_role
    status?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type branchesOrderByRelevanceInput = {
    fields: branchesOrderByRelevanceFieldEnum | branchesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type branchesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    services?: SortOrder
    created_at?: SortOrder
  }

  export type branchesAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type branchesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    services?: SortOrder
    created_at?: SortOrder
  }

  export type branchesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    services?: SortOrder
    created_at?: SortOrder
  }

  export type branchesSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type membershipsOrderByRelevanceInput = {
    fields: membershipsOrderByRelevanceFieldEnum | membershipsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type membershipsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    price?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
  }

  export type membershipsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    user_id?: SortOrder
  }

  export type membershipsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    price?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
  }

  export type membershipsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    price?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
  }

  export type membershipsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    user_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type qrsOrderByRelevanceInput = {
    fields: qrsOrderByRelevanceFieldEnum | qrsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type qrsCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    generated_at?: SortOrder
    description?: SortOrder
  }

  export type qrsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type qrsMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    generated_at?: SortOrder
    description?: SortOrder
  }

  export type qrsMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    generated_at?: SortOrder
    description?: SortOrder
  }

  export type qrsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type reportsOrderByRelevanceInput = {
    fields: reportsOrderByRelevanceFieldEnum | reportsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type reportsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    generated_at?: SortOrder
  }

  export type reportsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type reportsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    generated_at?: SortOrder
  }

  export type reportsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    generated_at?: SortOrder
  }

  export type reportsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rfid_accessOrderByRelevanceInput = {
    fields: rfid_accessOrderByRelevanceFieldEnum | rfid_accessOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type rfid_accessCountOrderByAggregateInput = {
    id?: SortOrder
    rfid_code?: SortOrder
    entry_date?: SortOrder
    exit_date?: SortOrder
    user_id?: SortOrder
  }

  export type rfid_accessAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type rfid_accessMaxOrderByAggregateInput = {
    id?: SortOrder
    rfid_code?: SortOrder
    entry_date?: SortOrder
    exit_date?: SortOrder
    user_id?: SortOrder
  }

  export type rfid_accessMinOrderByAggregateInput = {
    id?: SortOrder
    rfid_code?: SortOrder
    entry_date?: SortOrder
    exit_date?: SortOrder
    user_id?: SortOrder
  }

  export type rfid_accessSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type Enumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role
  }

  export type MembershipsListRelationFilter = {
    every?: membershipsWhereInput
    some?: membershipsWhereInput
    none?: membershipsWhereInput
  }

  export type Rfid_accessListRelationFilter = {
    every?: rfid_accessWhereInput
    some?: rfid_accessWhereInput
    none?: rfid_accessWhereInput
  }

  export type membershipsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rfid_accessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_roleFilter<$PrismaModel>
    _max?: NestedEnumusers_roleFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<usersCreateWithoutMembershipsInput, usersUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMembershipsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type usersUpdateOneWithoutMembershipsNestedInput = {
    create?: XOR<usersCreateWithoutMembershipsInput, usersUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMembershipsInput
    upsert?: usersUpsertWithoutMembershipsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMembershipsInput, usersUpdateWithoutMembershipsInput>, usersUncheckedUpdateWithoutMembershipsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutRfid_accessInput = {
    create?: XOR<usersCreateWithoutRfid_accessInput, usersUncheckedCreateWithoutRfid_accessInput>
    connectOrCreate?: usersCreateOrConnectWithoutRfid_accessInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutRfid_accessNestedInput = {
    create?: XOR<usersCreateWithoutRfid_accessInput, usersUncheckedCreateWithoutRfid_accessInput>
    connectOrCreate?: usersCreateOrConnectWithoutRfid_accessInput
    upsert?: usersUpsertWithoutRfid_accessInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRfid_accessInput, usersUpdateWithoutRfid_accessInput>, usersUncheckedUpdateWithoutRfid_accessInput>
  }

  export type membershipsCreateNestedManyWithoutUsersInput = {
    create?: XOR<membershipsCreateWithoutUsersInput, membershipsUncheckedCreateWithoutUsersInput> | membershipsCreateWithoutUsersInput[] | membershipsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: membershipsCreateOrConnectWithoutUsersInput | membershipsCreateOrConnectWithoutUsersInput[]
    createMany?: membershipsCreateManyUsersInputEnvelope
    connect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
  }

  export type rfid_accessCreateNestedManyWithoutUsersInput = {
    create?: XOR<rfid_accessCreateWithoutUsersInput, rfid_accessUncheckedCreateWithoutUsersInput> | rfid_accessCreateWithoutUsersInput[] | rfid_accessUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rfid_accessCreateOrConnectWithoutUsersInput | rfid_accessCreateOrConnectWithoutUsersInput[]
    createMany?: rfid_accessCreateManyUsersInputEnvelope
    connect?: rfid_accessWhereUniqueInput | rfid_accessWhereUniqueInput[]
  }

  export type membershipsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<membershipsCreateWithoutUsersInput, membershipsUncheckedCreateWithoutUsersInput> | membershipsCreateWithoutUsersInput[] | membershipsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: membershipsCreateOrConnectWithoutUsersInput | membershipsCreateOrConnectWithoutUsersInput[]
    createMany?: membershipsCreateManyUsersInputEnvelope
    connect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
  }

  export type rfid_accessUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<rfid_accessCreateWithoutUsersInput, rfid_accessUncheckedCreateWithoutUsersInput> | rfid_accessCreateWithoutUsersInput[] | rfid_accessUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rfid_accessCreateOrConnectWithoutUsersInput | rfid_accessCreateOrConnectWithoutUsersInput[]
    createMany?: rfid_accessCreateManyUsersInputEnvelope
    connect?: rfid_accessWhereUniqueInput | rfid_accessWhereUniqueInput[]
  }

  export type Enumusers_roleFieldUpdateOperationsInput = {
    set?: $Enums.users_role
  }

  export type membershipsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<membershipsCreateWithoutUsersInput, membershipsUncheckedCreateWithoutUsersInput> | membershipsCreateWithoutUsersInput[] | membershipsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: membershipsCreateOrConnectWithoutUsersInput | membershipsCreateOrConnectWithoutUsersInput[]
    upsert?: membershipsUpsertWithWhereUniqueWithoutUsersInput | membershipsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: membershipsCreateManyUsersInputEnvelope
    set?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    disconnect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    delete?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    connect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    update?: membershipsUpdateWithWhereUniqueWithoutUsersInput | membershipsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: membershipsUpdateManyWithWhereWithoutUsersInput | membershipsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: membershipsScalarWhereInput | membershipsScalarWhereInput[]
  }

  export type rfid_accessUpdateManyWithoutUsersNestedInput = {
    create?: XOR<rfid_accessCreateWithoutUsersInput, rfid_accessUncheckedCreateWithoutUsersInput> | rfid_accessCreateWithoutUsersInput[] | rfid_accessUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rfid_accessCreateOrConnectWithoutUsersInput | rfid_accessCreateOrConnectWithoutUsersInput[]
    upsert?: rfid_accessUpsertWithWhereUniqueWithoutUsersInput | rfid_accessUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: rfid_accessCreateManyUsersInputEnvelope
    set?: rfid_accessWhereUniqueInput | rfid_accessWhereUniqueInput[]
    disconnect?: rfid_accessWhereUniqueInput | rfid_accessWhereUniqueInput[]
    delete?: rfid_accessWhereUniqueInput | rfid_accessWhereUniqueInput[]
    connect?: rfid_accessWhereUniqueInput | rfid_accessWhereUniqueInput[]
    update?: rfid_accessUpdateWithWhereUniqueWithoutUsersInput | rfid_accessUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: rfid_accessUpdateManyWithWhereWithoutUsersInput | rfid_accessUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: rfid_accessScalarWhereInput | rfid_accessScalarWhereInput[]
  }

  export type membershipsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<membershipsCreateWithoutUsersInput, membershipsUncheckedCreateWithoutUsersInput> | membershipsCreateWithoutUsersInput[] | membershipsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: membershipsCreateOrConnectWithoutUsersInput | membershipsCreateOrConnectWithoutUsersInput[]
    upsert?: membershipsUpsertWithWhereUniqueWithoutUsersInput | membershipsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: membershipsCreateManyUsersInputEnvelope
    set?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    disconnect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    delete?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    connect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    update?: membershipsUpdateWithWhereUniqueWithoutUsersInput | membershipsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: membershipsUpdateManyWithWhereWithoutUsersInput | membershipsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: membershipsScalarWhereInput | membershipsScalarWhereInput[]
  }

  export type rfid_accessUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<rfid_accessCreateWithoutUsersInput, rfid_accessUncheckedCreateWithoutUsersInput> | rfid_accessCreateWithoutUsersInput[] | rfid_accessUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rfid_accessCreateOrConnectWithoutUsersInput | rfid_accessCreateOrConnectWithoutUsersInput[]
    upsert?: rfid_accessUpsertWithWhereUniqueWithoutUsersInput | rfid_accessUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: rfid_accessCreateManyUsersInputEnvelope
    set?: rfid_accessWhereUniqueInput | rfid_accessWhereUniqueInput[]
    disconnect?: rfid_accessWhereUniqueInput | rfid_accessWhereUniqueInput[]
    delete?: rfid_accessWhereUniqueInput | rfid_accessWhereUniqueInput[]
    connect?: rfid_accessWhereUniqueInput | rfid_accessWhereUniqueInput[]
    update?: rfid_accessUpdateWithWhereUniqueWithoutUsersInput | rfid_accessUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: rfid_accessUpdateManyWithWhereWithoutUsersInput | rfid_accessUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: rfid_accessScalarWhereInput | rfid_accessScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role
  }

  export type NestedEnumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_roleFilter<$PrismaModel>
    _max?: NestedEnumusers_roleFilter<$PrismaModel>
  }

  export type usersCreateWithoutMembershipsInput = {
    name: string
    lastname: string
    email: string
    password: string
    role: $Enums.users_role
    status?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    rfid_access?: rfid_accessCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutMembershipsInput = {
    id?: number
    name: string
    lastname: string
    email: string
    password: string
    role: $Enums.users_role
    status?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    rfid_access?: rfid_accessUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutMembershipsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMembershipsInput, usersUncheckedCreateWithoutMembershipsInput>
  }

  export type usersUpsertWithoutMembershipsInput = {
    update: XOR<usersUpdateWithoutMembershipsInput, usersUncheckedUpdateWithoutMembershipsInput>
    create: XOR<usersCreateWithoutMembershipsInput, usersUncheckedCreateWithoutMembershipsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMembershipsInput, usersUncheckedUpdateWithoutMembershipsInput>
  }

  export type usersUpdateWithoutMembershipsInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rfid_access?: rfid_accessUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutMembershipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rfid_access?: rfid_accessUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutRfid_accessInput = {
    name: string
    lastname: string
    email: string
    password: string
    role: $Enums.users_role
    status?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    memberships?: membershipsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRfid_accessInput = {
    id?: number
    name: string
    lastname: string
    email: string
    password: string
    role: $Enums.users_role
    status?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    memberships?: membershipsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRfid_accessInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRfid_accessInput, usersUncheckedCreateWithoutRfid_accessInput>
  }

  export type usersUpsertWithoutRfid_accessInput = {
    update: XOR<usersUpdateWithoutRfid_accessInput, usersUncheckedUpdateWithoutRfid_accessInput>
    create: XOR<usersCreateWithoutRfid_accessInput, usersUncheckedCreateWithoutRfid_accessInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRfid_accessInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRfid_accessInput, usersUncheckedUpdateWithoutRfid_accessInput>
  }

  export type usersUpdateWithoutRfid_accessInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memberships?: membershipsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRfid_accessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memberships?: membershipsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type membershipsCreateWithoutUsersInput = {
    name: string
    description?: string | null
    duration?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    price?: number | null
    status?: boolean | null
  }

  export type membershipsUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    duration?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    price?: number | null
    status?: boolean | null
  }

  export type membershipsCreateOrConnectWithoutUsersInput = {
    where: membershipsWhereUniqueInput
    create: XOR<membershipsCreateWithoutUsersInput, membershipsUncheckedCreateWithoutUsersInput>
  }

  export type membershipsCreateManyUsersInputEnvelope = {
    data: membershipsCreateManyUsersInput | membershipsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type rfid_accessCreateWithoutUsersInput = {
    rfid_code: string
    entry_date?: Date | string | null
    exit_date?: Date | string | null
  }

  export type rfid_accessUncheckedCreateWithoutUsersInput = {
    id?: number
    rfid_code: string
    entry_date?: Date | string | null
    exit_date?: Date | string | null
  }

  export type rfid_accessCreateOrConnectWithoutUsersInput = {
    where: rfid_accessWhereUniqueInput
    create: XOR<rfid_accessCreateWithoutUsersInput, rfid_accessUncheckedCreateWithoutUsersInput>
  }

  export type rfid_accessCreateManyUsersInputEnvelope = {
    data: rfid_accessCreateManyUsersInput | rfid_accessCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type membershipsUpsertWithWhereUniqueWithoutUsersInput = {
    where: membershipsWhereUniqueInput
    update: XOR<membershipsUpdateWithoutUsersInput, membershipsUncheckedUpdateWithoutUsersInput>
    create: XOR<membershipsCreateWithoutUsersInput, membershipsUncheckedCreateWithoutUsersInput>
  }

  export type membershipsUpdateWithWhereUniqueWithoutUsersInput = {
    where: membershipsWhereUniqueInput
    data: XOR<membershipsUpdateWithoutUsersInput, membershipsUncheckedUpdateWithoutUsersInput>
  }

  export type membershipsUpdateManyWithWhereWithoutUsersInput = {
    where: membershipsScalarWhereInput
    data: XOR<membershipsUpdateManyMutationInput, membershipsUncheckedUpdateManyWithoutUsersInput>
  }

  export type membershipsScalarWhereInput = {
    AND?: membershipsScalarWhereInput | membershipsScalarWhereInput[]
    OR?: membershipsScalarWhereInput[]
    NOT?: membershipsScalarWhereInput | membershipsScalarWhereInput[]
    id?: IntFilter<"memberships"> | number
    name?: StringFilter<"memberships"> | string
    description?: StringNullableFilter<"memberships"> | string | null
    duration?: StringNullableFilter<"memberships"> | string | null
    start_date?: DateTimeNullableFilter<"memberships"> | Date | string | null
    end_date?: DateTimeNullableFilter<"memberships"> | Date | string | null
    price?: FloatNullableFilter<"memberships"> | number | null
    status?: BoolNullableFilter<"memberships"> | boolean | null
    user_id?: IntNullableFilter<"memberships"> | number | null
  }

  export type rfid_accessUpsertWithWhereUniqueWithoutUsersInput = {
    where: rfid_accessWhereUniqueInput
    update: XOR<rfid_accessUpdateWithoutUsersInput, rfid_accessUncheckedUpdateWithoutUsersInput>
    create: XOR<rfid_accessCreateWithoutUsersInput, rfid_accessUncheckedCreateWithoutUsersInput>
  }

  export type rfid_accessUpdateWithWhereUniqueWithoutUsersInput = {
    where: rfid_accessWhereUniqueInput
    data: XOR<rfid_accessUpdateWithoutUsersInput, rfid_accessUncheckedUpdateWithoutUsersInput>
  }

  export type rfid_accessUpdateManyWithWhereWithoutUsersInput = {
    where: rfid_accessScalarWhereInput
    data: XOR<rfid_accessUpdateManyMutationInput, rfid_accessUncheckedUpdateManyWithoutUsersInput>
  }

  export type rfid_accessScalarWhereInput = {
    AND?: rfid_accessScalarWhereInput | rfid_accessScalarWhereInput[]
    OR?: rfid_accessScalarWhereInput[]
    NOT?: rfid_accessScalarWhereInput | rfid_accessScalarWhereInput[]
    id?: IntFilter<"rfid_access"> | number
    rfid_code?: StringFilter<"rfid_access"> | string
    entry_date?: DateTimeNullableFilter<"rfid_access"> | Date | string | null
    exit_date?: DateTimeNullableFilter<"rfid_access"> | Date | string | null
    user_id?: IntNullableFilter<"rfid_access"> | number | null
  }

  export type membershipsCreateManyUsersInput = {
    id?: number
    name: string
    description?: string | null
    duration?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    price?: number | null
    status?: boolean | null
  }

  export type rfid_accessCreateManyUsersInput = {
    id?: number
    rfid_code: string
    entry_date?: Date | string | null
    exit_date?: Date | string | null
  }

  export type membershipsUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type membershipsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type membershipsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type rfid_accessUpdateWithoutUsersInput = {
    rfid_code?: StringFieldUpdateOperationsInput | string
    entry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rfid_accessUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfid_code?: StringFieldUpdateOperationsInput | string
    entry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rfid_accessUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    rfid_code?: StringFieldUpdateOperationsInput | string
    entry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}