'use client';

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// Used the following tutorials when designing the d3 visualization:
// - https://clouddevs.com/next/data-visualization-with-d3js/

function BarChart() {
  const svgRef = useRef();

  useEffect(() => {
    // Create an SVG container
    const svg = d3.select(svgRef.current)
      .append('svg')
      .attr('width', 500)
      .attr('height', 300);

    // Add your chart elements here
  }, []);

  return (
    <div>
      <h2>Bar Chart</h2>
      <div ref={svgRef}></div>
    </div>
  );
}

export default BarChart;