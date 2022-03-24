import PrimaryButtonText from './PrimaryButtonText'

export default function PrimaryButton({ count, sx }) {
  return (
    <button
      type="button"
      id="btn1"
      onClick={() => alert('1234')}
      sx={{ width: 1, ...sx }}
    >
      <PrimaryButtonText count={count} />
    </button>
  )
}
