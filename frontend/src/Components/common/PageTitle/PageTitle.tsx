import React from 'react'
import { Icon as LegacyIcon } from '@ant-design/compatible'

type Props = {
  title: string
  icon?: string
}

const PageTitle: React.FunctionComponent<Props> = ({ title, ...props }) => {
  const { icon } = props

  if (icon) {
    return (
      <h3 {...props}>
        <LegacyIcon type={icon} /> {title}
      </h3>
    )
  }

  return <h3 {...props}>{title}</h3>
}

export default PageTitle
