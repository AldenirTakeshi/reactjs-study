export default () => {
  const status = true;
  return (
    <h2 style={{ color: status ? '#00ff9f' : '#f64348' }}>
      Opa {status ? 'True' : 'False'}
    </h2>
  );
};
