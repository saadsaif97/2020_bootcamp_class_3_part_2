export const Conditional = ({
  sunnyWeather,
  horizontalPlace,
  verticalPlace,
}) => {
  let url = sunnyWeather
    ? 'https://source.unsplash.com/400x400/?sun,'
    : 'https://source.unsplash.com/400x400/?rain'
  return (
    <div
      style={{
        display: 'flex',
        height: '80vh',
        justifyContent: horizontalPlace,
        alignItems: verticalPlace,
      }}
    >
      <img
        src={`${url}`}
        style={{
          boxShadow: '20px 20px #f2ff34',
          marginTop: '50px',
          height: '400px',
          width: '400px',
        }}
        alt='weather'
      />
    </div>
  )
}
