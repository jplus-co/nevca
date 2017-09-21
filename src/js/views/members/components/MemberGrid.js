import { h } from 'preact'
import classnames from 'classnames'
import MemberGridList from './MemberGridList'
import MemberGridSkeleton from './MemberGridSkeleton'

const MemberGrid = ({
  members,
  loading
}) => (
  <div class={classnames('member-grid', {
    'member-grid--loading': loading
  })}>
    <MemberGridList members={members} />
    <MemberGridSkeleton members={members} />
  </div>
)

export default MemberGrid
