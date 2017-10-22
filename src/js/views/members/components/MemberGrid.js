import { h } from 'preact'
import classnames from 'classnames'
import MemberGridList from './MemberGridList'
import MemberGridSkeleton from './MemberGridSkeleton'

const MemberGrid = ({
  members,
  sectors,
  loading
}) => {
  const membersWithCTACard = [
    ...members.data.slice(0, 5),
    'cta',
    ...members.data.slice(5)
  ]

  return (
    <div class={classnames('member-grid', {
      'member-grid--loading': loading
    })}>
      <MemberGridList members={membersWithCTACard} sectors={sectors} />
      <MemberGridSkeleton members={membersWithCTACard} />
    </div>
  )
}

export default MemberGrid
