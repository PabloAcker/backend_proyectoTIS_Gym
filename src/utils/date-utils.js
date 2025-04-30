function addMonthsToDate(date, months) {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
  }
  
  module.exports = {
    addMonthsToDate
  };
  