
export default function(app){

  app.get('/api/ping', (req, res) => {
    res.send('pong')
  })

}
