import React, { useEffect, useRef, CSSProperties } from 'react';
import * as d3 from 'd3';

import { setArrowColor } from '../../../utils/utils';
import { GraphProps, UtilizationScheduleBlock } from '../type';
import {
  UTILIZATION_SCHEDULE_BACKGROUND_COLOR,
  ZONE_BACKGROUND_COLOR,
  BLOCK_BACKGROUND_COLOR,
} from '../constants';

import './top-graph.scss';

const cloud = require('../../../assets/cloud.png')

export default function TopGraph({
  data,
  height,
  width
}: GraphProps) {

  const d3Container = useRef(null);

  useEffect(() => {
    if (data.length && d3Container.current) {
      updateDatapoints(width, height)
    }
  }, [data.length, width, height, d3Container.current])

  function updateDatapoints(width: number, height: number) {
    const svg = d3.select(d3Container.current);
    const blockWidth = width / data.length;
    const indentation = blockWidth / 3;
    const valueTextSize = blockWidth / 10;
    const areaNameTextSize = blockWidth / 10;
    const blockNameTextSize = blockWidth / 11;
    const arrowStrokeWidth = blockWidth / 30;

    const yBottomValue = height * 0.8;
    const yTopValue = height * 0.43;
    const yBottomLine = height * 0.63;
    const yTopLine = height * 0.5;

    svg.selectAll("*").remove();

    svg.selectAll('.block')
      .data(data)
      .enter()
      .append('rect')
      .attr("class", "block")
      .style('fill', ZONE_BACKGROUND_COLOR)
      .attr('width', () => blockWidth - indentation)
      .attr('height', '100%')
      .attr('x', (_, i) => blockWidth * i)
      .attr('y', 0)

    // добавляем название зоны
    svg.selectAll('.area-text')
      .data(data)
      .enter()
      .append("text")
      .attr("class", "area-text")
      .attr("x", (_: any, i: number) => blockWidth * (i + 0.5) - indentation / 2)
      .attr("y", height * 0.2)
      .attr("text-anchor", "middle")
      .attr("fill", "#fff")
      .text(((d: UtilizationScheduleBlock) => d.area) as any)
      .style("font-size", areaNameTextSize)

    // добавляем block
    svg.selectAll('.inner-block')
      .data(new Array(data.length - 1))
      .enter()
      .append('rect')
      .attr("class", "inner-block")
      .style('fill', BLOCK_BACKGROUND_COLOR)
      .attr('width', () => (blockWidth - indentation) / 2)
      .attr('height', height / 3)
      .attr('x', (_: any, i: number) => blockWidth * (i + 1) + (blockWidth - indentation) * 0.25)
      .attr('y', height * 0.40)

    // добавляем cloud
    svg.append("svg:image")
      .attr('x', (blockWidth - indentation) * 0.15)
      .attr('y', height * 0.30)
      .attr('width', (blockWidth - indentation) * 0.7)
      .attr('height', height * 0.4)
      .attr("xlink:href", cloud)

    // добавляем название блока
    svg.selectAll('.block-text')
      .data(data)
      .enter()
      .append("text")
      .attr("class", "block-text")
      .attr("x", (_: any, i: number) => blockWidth * (i + 0.5) - indentation / 2)
      .attr("y", height * 0.6)
      .attr('text-anchor', "middle")
      .text((d: UtilizationScheduleBlock) => d.name)
      .style("font-size", blockNameTextSize)

    // arrow_top
    svg.append("svg:defs")
      .selectAll('.arrow-triangle_top-i')
      .data(data.slice(0, -1))
      .enter()
      .append("svg:marker")
      .attr("class", "arrow-triangle_top-i")
      .attr("id", (_, i) => `triangle_top-i${i}`)
      .attr("refX", 1)
      .attr("refY", 1.5)
      .attr("markerWidth", 20)
      .attr("markerHeight", 20)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0 0 3 1.5 0 3 0.5 1.5")
      .style("fill", (d: UtilizationScheduleBlock) => setArrowColor(d.out));

    // line_top-i           
    svg.selectAll('.arrow-line_top-i')
      .data(data.slice(0, -1))
      .enter()
      .append("line")
      .attr("class", "arrow-line_top-i")
      .attr("x1", (_: any, i: number) => blockWidth * (i + 1) - indentation - blockWidth / 14)
      .attr("y1", yTopLine)
      .attr("x2", (_: any, i: number) => blockWidth * (i + 1) + blockWidth / 14)
      .attr("y2", yTopLine)
      .attr("stroke-width", arrowStrokeWidth)
      .attr("stroke", (d: UtilizationScheduleBlock) => setArrowColor(d.out))
      .attr("marker-end", (_, i) => `url(#triangle_top-i${i})`);

    // arrow_bottom
    svg.append("svg:defs")
      .selectAll('.arrow-triangle_bottom-i')
      .data(data.slice(0, -1))
      .enter()
      .append("svg:marker")
      .attr("class", "arrow-triangle_bottom-i")
      .attr("id", (_, i) => `triangle_bottom-i${i}`)
      .attr("refX", 1)
      .attr("refY", 1.5)
      .attr("markerWidth", 20)
      .attr("markerHeight", 20)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0 1.5 3 0 2.5 1.5 3 3")
      .style("fill", (d: UtilizationScheduleBlock) => setArrowColor(d.in))

    // line_bottom-i         
    svg.selectAll('.arrow-line_bottom-i')
      .data(data.slice(0, -1))
      .enter()
      .append("line")
      .attr("class", "arrow-line_bottom-i")
      .attr("x1", (_: any, i: number) => blockWidth * (i + 1) - indentation - blockWidth / 10)
      .attr("y1", yBottomLine)
      .attr("x2", (_: any, i: number) => blockWidth * (i + 1) + blockWidth / 14)
      .attr("y2", yBottomLine)
      .attr("stroke-width", arrowStrokeWidth)
      .attr("stroke", (d: UtilizationScheduleBlock) => setArrowColor(d.in))
      .attr("marker-start", (_, i) => `url(#triangle_bottom-i${i})`);

    // add top value
    svg.selectAll('.top-arrow-value-i')
      .data(data.slice(0, -1))
      .enter()
      .append("text")
      .attr("class", "top-arrow-value-i")
      .attr("x", (_, i) => blockWidth * (i + 1) - indentation / 2)
      .attr("y", yTopValue)
      .attr("text-anchor", "middle")
      .attr("fill", (d: UtilizationScheduleBlock) => setArrowColor(d.out))
      .text((d: UtilizationScheduleBlock) => d.out ? d.out[0] : '')
      .style("font-size", valueTextSize)

    // add bottom value
    svg.selectAll('.bottom-arrow-value-i')
      .data(data.slice(0, -1))
      .enter()
      .append("text")
      .attr("class", "bottom-arrow-value-i")
      .attr("x", (_, i) => blockWidth * (i + 1) - indentation / 2)
      .attr("y", yBottomValue)
      .attr("text-anchor", "middle")
      .attr("fill", (d: UtilizationScheduleBlock) => setArrowColor(d.in))
      .text((d: UtilizationScheduleBlock) => d.in ? d.in[0] : '')
      .style("font-size", valueTextSize)
  }

  return (
    <svg
      style={{ 'background-color': UTILIZATION_SCHEDULE_BACKGROUND_COLOR } as CSSProperties}
      width={width}
      height={height}
      ref={d3Container}
    />
  );
}
