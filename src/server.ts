import app from './app';
const port = process.env.PORT || 5151;
app.listen(port, () => {
  console.log('Example app listening on port 5151!');
});
