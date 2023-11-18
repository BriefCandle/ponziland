// PlotData.ts

export interface IPlot {
    x: number;
    y: number;    
    id: string;
    owner: string;
    taxReserve: number;
    taxToClaim: number;
    salePrice: number;
  }
  
  // Example of how to create an array of plots
  export const plots: IPlot[] = [];
  