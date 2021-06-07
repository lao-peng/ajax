const express = require('express')

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.post('/test', (req, res) => {
  const { username } = req.body
  let arr = ['zs', 'ls', 'mg', 'hj', 'ph']

  let result = arr.includes(username)
  res.send(result ? '用户名不可用' : '用户名可用')
})

app.listen(5000, () => {
  console.log('ok')
})
