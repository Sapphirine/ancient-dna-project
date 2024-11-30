'use client';

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client'

// json file from here:
// https://github.com/topojson/world-atlas?tab=readme-ov-file
import world from "./countries-110m.json"

// Used the following tutorials when designing the d3 visualization:
// - https://clouddevs.com/next/data-visualization-with-d3js/
// - https://www.youtube.com/watch?v=hrJ64jpYb0A&t
// - https://observablehq.com/@d3/world-map-svg

function AncientDnaMap() {
  const svgRef = useRef();

  useEffect(() => {

    const width = 975;
    const height = 610;

    const path = d3.geoPath(d3.geoNaturalEarth1())
    const svg = d3.select(svgRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const worldBackground = svg.append('path')
      .attr('fill', '#ddd')
      .attr('d', path(topojson.feature(world, world.objects.land)))

    const worldBorders = svg.append('path')
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('d', path(topojson.feature(world, world.objects.countries)))

    const ancientHumanDataElements = svg.append('g');

  }, []);

  return (
    <div>
      <div ref={svgRef}></div>
    </div>
  );
}

export default AncientDnaMap;