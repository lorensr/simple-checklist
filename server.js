import express from 'express'
import bodyParser from 'body-parser'

const server = express()
const port = 3000

server.use(bodyParser.urlencoded())

server.post('/create-checklist', (req, res) => {
  const { text } = req.body
  const inBetweenQuotes = /"([^"]*)"*/g
  const matches = text.match(inBetweenQuotes)
  const items = matches.map(match => match.substring(1, match.length - 1))
  console.log(items)
  // const message = {
  //   text: 'Would you like to play a game?',
  //   attachments: [
  //     {
  //       text: 'Choose a game to play',
  //       fallback: 'You are unable to choose a game',
  //       callback_id: 'wopr_game',
  //       color: '#3AA3E3',
  //       attachment_type: 'default',
  //       actions: [
  //         {
  //           name: 'game',
  //           text: 'Chess',
  //           type: 'button',
  //           value: 'chess'
  //         },
  //         {
  //           name: 'game',
  //           text: '',
  //           type: 'button',
  //           value: 'maze'
  //         },
  //         {
  //           name: 'game',
  //           text: 'Thermonuclear War',
  //           style: 'danger',
  //           type: 'button',
  //           value: 'war',
  //           confirm: {
  //             title: 'Are you sure?',
  //             text: "Wouldn't you prefer a good game of chess?",
  //             ok_text: 'Yes',
  //             dismiss_text: 'No'
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // }
  res.send(text)
})

server.listen(port, () => console.log(`Example app listening on port ${port}!`))
