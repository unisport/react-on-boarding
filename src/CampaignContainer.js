/**
 *
 */
import { render } from 'react-dom'
import React from 'react'

const CampaignContainer = ({data}) => {
    return <div>{data.words.map(w => w.toUpperCase()).join(' ')}</div>
}

render(
    <CampaignContainer data={window.campaign_data} />,
    document.getElementById('root')
)
