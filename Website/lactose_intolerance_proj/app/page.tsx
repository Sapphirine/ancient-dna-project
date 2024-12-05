'use client';

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client'
import ancientHumanData from "./ancientHumanData.json"

// json file from here:
// https://geojson-maps.kyd.au/
import geoJson from "./worldMapLowRes.json"

// Used the following tutorials when designing the d3 visualization:
// - https://clouddevs.com/next/data-visualization-with-d3js/
// - https://www.youtube.com/watch?v=hrJ64jpYb0A&t
// - https://observablehq.com/@d3/world-map-svg
// - https://www.d3indepth.com/datajoins/

function AncientDnaMap() {
  const svgRef = useRef();

  useEffect(() => {

    const width = 975;
    const height = 610;

    const projection = d3.geoNaturalEarth1()
    const geoGenerator = d3.geoPath(projection)
    const svg = d3.select(svgRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const world  = svg.selectAll('path')
      .data(geoJson.features)
      .join('path')
      .attr('d', geoGenerator)
      .attr('fill', '#ddd')
      .attr('stroke', '#000')
      .attr('stroke-width', '0.5')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')

    const ancientHumanDataElements = svg.selectAll('circle')
      .data(ancientHumanData["elements"])
      .join('circle')
      .attr('r', 1)
      .attr('fill', '#f00')
      .attr('cx', d => projection([d.Longitude, d.Latitude])[0])
      .attr('cy', d => projection([d.Longitude, d.Latitude])[1])

  }, []);

  return (
    <div>
      <div ref={svgRef}></div>
    </div>
  );
}

export default AncientDnaMap;