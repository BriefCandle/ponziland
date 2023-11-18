// PlotData.ts

export interface IPlot {
    x: number;
    y: number;    
    owner: string;
    taxReserve: number;
    salePrice: number;
  }
  
  // Example of how to create an array of plots
  export const plots: IPlot[] = [];
  