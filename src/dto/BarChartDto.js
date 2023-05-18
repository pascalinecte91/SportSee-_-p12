/**
 * @class BarChartDto - Represents a data transfer object for a bar chart.
 */
class BarChartDto {
  /**
   * Create a BarChartDto.
   * @param {Array} data - The data for the bar chart.
   * @param {string} titleX - The title for the X-axis.
   * @param {string} titleY - The title for the Y-axis.
   */
  constructor(data, titleX, titleY) {
    this.data = data;
    this.titleX = titleX;
    this.titleY = titleY;
  }
}

export default BarChartDto;
