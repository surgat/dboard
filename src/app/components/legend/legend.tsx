import React from 'react';

import './legend.scss';

export default function Legend({ data }) {

  function renderLegendPoints() {
    return data.map((point: { color: string, name: string }) => (
      <LegendPoint
        key={point.color}
        color={point.color}
        name={point.name}
      />
    ))
  }

  return (
    <div className="Legend">
      <div className="Legend__block">
        {renderLegendPoints()}
      </div>
    </div>
  )
}

function LegendPoint({ color, name }: { color: string, name: string }) {
  return (
    <>
      <div className="Legend__point" style={{ backgroundColor: color }} />
      <span className="Legend__name">
        {name}
      </span>
    </>
  )
}