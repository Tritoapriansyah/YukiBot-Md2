require('./settings')
const {
  default: alphaConnect,
  useSingleFileAuthState,
  DisconnectReason,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  proto,
  makeInMemoryStore,
  jidDecode,
} = require('@adiwajshing/baileys-md'),
      const { state, saveState } = useSingleFileAuthState('./session.json'),
      const pino = require('pino'),
      const figlet = require('figlet'),
  fs = require('fs'),
  moment = require('moment-timezone'),
  chalk = require('chalk'),
  fetch = require('node-fetch')
const yargs = require('yargs'),
  { color } = require('./lib/color'),
  FileType = require('file-type'),
  PhoneNumber = require('awesome-phonenumber'),
  {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
    writeExif,
  } = require('./lib/exif'),
  { TelegraPh } = require('./lib/uploader'),
  {
    smsg,
    formatp,
    tanggal,
    formatDate,
    getTime,
    isUrl,
    sleep,
    clockString,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
  } = require('./lib/myfunc')
pp_bot2 = fs.readFileSync(thumbnail)
const { ind } = require('./language')
lang = ind
const _0x350fc9 = {}
_0x350fc9.participant = '0@s.whatsapp.net'
_0x350fc9.remoteJid = '0@s.whatsapp.net'
const _0x923ffc = {}
_0x923ffc.groupJid = '6288213840883-1616169743@g.us'
_0x923ffc.inviteCode = 'm'
_0x923ffc.groupName = 'P'
_0x923ffc.caption = 'Made With ' + ownername
_0x923ffc.jpegThumbnail = pp_bot2
const _0x276c86 = {}
_0x276c86.groupInviteMessage = _0x923ffc
const _0x1afdf5 = {}
_0x1afdf5.key = _0x350fc9
_0x1afdf5.message = _0x276c86
const fgclink = _0x1afdf5
enter = '\n'
const porti = ['12736', '92819', '82718', '82818', '11302', '26152'],
  kakakhi = porti[Math.floor(Math.random() * porti.length)]
global.api = (_0x2df5a8, _0x4de30b = '/', _0x14b29a = {}, _0x281190) =>
  (_0x2df5a8 in global.APIs ? global.APIs[_0x2df5a8] : _0x2df5a8) +
  _0x4de30b +
  (_0x14b29a || _0x281190
    ? '?' +
      new URLSearchParams(
        Object.entries({
          ..._0x14b29a,
          ...(_0x281190
            ? {
                [_0x281190]:
                  global.APIKeys[
                    _0x2df5a8 in global.APIs
                      ? global.APIs[_0x2df5a8]
                      : _0x2df5a8
                  ],
              }
            : {}),
        })
      )
    : '')
global.alphabot = 'tanjaknurong'
global.opts = new Object(
  yargs(process.argv.slice(2)).exitProcess(false).parse()
)
global.db = new (require('./lib/database'))(
  (opts['_'][0] ? opts['_'][0] + '_' : '') + 'database.json',
  null,
  2
)
global.db.data = {
  users: {},
  chats: {},
  database: {},
  game: {},
  absen: {},
  cmd: {},
  settings: {},
  ...(global.db.data || {}),
}
const _0x21ccb2 = {}
_0x21ccb2.level = 'debug'
_0x21ccb2.stream = 'store'
const store = makeInMemoryStore({ logger: pino().child(_0x21ccb2) })
store.readFromFile('./store.json')
setInterval(() => {
  store.writeToFile('./store.json')
}, 10000)
async function startalpha() {
  console.log(
    color(
      figlet.textSync('KingOfBear-MD', {
        font: 'Standard',
        horizontalLayout: 'default',
        vertivalLayout: 'default',
        whitespaceBreak: false,
      }),
      'cyan'
    )
  )
  console.log(
    '|\x1B[1;32m Multi Device \x1B[1;37m|',
    color('Checking database configuration', 'yellow')
  )
  await sleep(2000)
  console.log('|\x1B[1;32m Multi Device \x1B[1;37m|', color('Done', 'skyblue'))
  await sleep(1000)
  console.log(
    '|\x1B[1;32m Multi Device \x1B[1;37m|',
    color('Connecting to WhatsApp web', 'yellow')
  )
  await sleep(1000)
  console.log(
    '|\x1B[1;32m Multi Device \x1B[1;37m|',
    color('Server running on port ' + kakakhi, 'yellow')
  )
  await sleep(1000)
  const _0x464363 = () => {
      let _0x3d6d4a
      try {
        let _0x4f9da2 = fetchJson(
          'https://web.whatsapp.com/check-update?version=1&platform=web'
        )
        _0x3d6d4a = [_0x4f9da2.currentVersion.replace(/[.]/g, ', ')]
      } catch {
        _0x3d6d4a = [2, 2204, 13]
      }
      return _0x3d6d4a
    },
    _0x7d5bfc = alphaConnect({
      logger: pino({ level: 'fatal' }),
      printQRInTerminal: true,
      browser: ['Bot By KingOfBear', 'Safari', '1.0.0'],
      auth: state,
      version: _0x464363() || [2, 2204, 13],
    })
  store.bind(_0x7d5bfc.ev)
  _0x7d5bfc.ev.on('messages.upsert', async (_0x3a7828) => {
    try {
      mek = _0x3a7828.messages[0]
      if (!mek.message) {
        return
      }
      mek.message =
        Object.keys(mek.message)[0] === 'ephemeralMessage'
          ? mek.message.ephemeralMessage.message
          : mek.message
      if (mek.key && mek.key.remoteJid === 'status@broadcast') {
        return
      }
      if (!_0x7d5bfc.public && !mek.key.fromMe && _0x3a7828.type === 'notify') {
        return
      }
      if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) {
        return
      }
      m = smsg(_0x7d5bfc, mek, store)
      switch (m.mtype) {
        case 'imageMessage':
        case 'videoMessage':
        case 'audioMessage':
        case 'stickerMessage':
        case 'documentMessage':
        case 'senderKeyDistributionMessage':
          if (!m.key.fromMe) {
            await sleep(1000)
          }
          const _0x78439 = m.msg ? m.msg.url : _0x7d5bfc.quoted.url
          if (!_0x78439) {
            await _0x7d5bfc.refreshMediaConn(true)
          }
          break
      }
      require('./index')(_0x7d5bfc, m, _0x3a7828, store)
    } catch (_0x57f5e2) {
      console.log(_0x57f5e2)
    }
  })
  _0x7d5bfc.serializeM = (_0xdd32ed) => smsg(_0x7d5bfc, _0xdd32ed, store)
  let _0x5a7d98 = JSON.stringify(global.db.data)
  if (!opts.test) {
    setInterval(() => {
      console.log(chalk.redBright('Reading Database...'))
      if (JSON.stringify(global.db.data) == _0x5a7d98) {
        console.log(chalk.redBright('Database Update Now...'))
      } else {
        global.db.save()
        console.log(chalk.redBright('Done Update Database...'))
        let _0x536774 = JSON.stringify(global.db.data)
      }
    }, 60000)
  }
  _0x7d5bfc.ev.on('group-participants.update', async (_0x327e85) => {
    console.log(_0x327e85)
    try {
      let _0x240e18 = await _0x7d5bfc.groupMetadata(_0x327e85.id)
      memeg = _0x240e18.participants.length
      let _0x287812 = _0x327e85.participants
      const _0x3e6f30 = moment.tz('Asia/Jakarta').format('HH:mm:ss')
      let _0x518620 = new Date(),
        _0x3fad61 = 'id',
        _0x336342 =
          new Date(0).getTime() - new Date('1 Januari 2021').getTime(),
        _0x4025e7 = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][
          Math.floor((_0x518620 * 1 + _0x336342) / 84600000) % 5
        ]
      const _0x3a9e3e = { weekday: 'long' }
      let _0x3a1fb0 = _0x518620.toLocaleDateString(_0x3fad61, _0x3a9e3e)
      const _0x33a415 = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }
      let _0x30c5b9 = _0x518620.toLocaleDateString(_0x3fad61, _0x33a415)
      for (let _0x1a177c of _0x287812) {
        try {
          ppuser = await _0x7d5bfc.profilePictureUrl(_0x1a177c, 'image')
        } catch {
          ppuser =
            'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
        }
        try {
          ppgroup = await _0x7d5bfc.profilePictureUrl(_0x327e85.id, 'image')
        } catch {
          ppgroup =
            'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
        }
        hmm = await getBuffer(ppuser)
        ff = (await './image/ppuser-') + getRandom('.png')
        await fs.writeFileSync(ff, hmm)
        ppu = await TelegraPh(ff)
        hmm2 = await getBuffer(ppgroup)
        fff = (await './image/ppgc-') + getRandom('.png')
        await fs.writeFileSync(fff, hmm2)
        ppgc = await TelegraPh(fff)
        try {
          welcome = await getBuffer(
            'https://greetings.zeipulfc2.repl.co/api/welcome2?name=' +
              encodeURI(_0x1a177c.split('@')[0]) +
              '&mem=' +
              encodeURI(memeg) +
              '&gcname=' +
              encodeURI(_0x240e18.subject) +
              '&picurl=' +
              ppu +
              '&desc=baca&bgurl=' +
              background_welcome +
              '&gcicon=' +
              ppgc
          )
        } catch {
          welcome = Buffer.isBuffer(ppuser)
            ? ppuser
            : /^data:.*?\/.*?;base64,/i.test(ppuser)
            ? Buffer.from(ppuser.split`,`[1], 'base64')
            : /^https?:\/\//.test(ppuser)
            ? await (await fetch(ppuser)).buffer()
            : fs.existsSync(ppuser)
            ? fs.readFileSync(ppuser)
            : Buffer.alloc(0)
        }
        let _0x422090 = await getBuffer(ppgroup)
        if (_0x327e85.action == 'add') {
          teks =
            'Selamat Datang Di *' +
            _0x240e18.subject +
            '*, Semoga Beta @' +
            _0x1a177c.split('@')[0] +
            ' :"D'
          const _0x1504c0 = {
            degreesLatitude: 0,
            degreesLongitude: 0,
            jpegThumbnail: welcome,
          }
          var _0x33a7b1 = generateWAMessageFromContent(
            _0x327e85.id,
            {
              templateMessage: {
                hydratedTemplate: {
                  locationMessage: _0x1504c0,
                  hydratedContentText:
                    'Welcome To ' +
                    _0x240e18.subject +
                    ' ' +
                    _0x1a177c.split('@')[0] +
                    '\n' +
                    lang.welcome(),
                  hydratedFooterText: '\xA9 ' + ownername,
                  hydratedButtons: [
                    {
                      urlButton: {
                        displayText: 'YouTube Creator',
                        url: '' + youtube,
                      },
                    },
                    {
                      urlButton: {
                        displayText: "Rest Api's",
                        url: '' + myweb,
                      },
                    },
                    {
                      quickReplyButton: {
                        displayText: 'Donasi',
                        id: 'donate',
                      },
                    },
                    {
                      quickReplyButton: {
                        displayText: 'Owner',
                        id: 'owner',
                      },
                    },
                  ],
                },
              },
            },
            {}
          )
          _0x7d5bfc.relayMessage(_0x327e85.id, _0x33a7b1.message, {
            messageId: _0x33a7b1.key.id,
          })
        } else {
          if (_0x327e85.action == 'remove') {
            try {
              leave = await getBuffer(
                'https://greetings.zeipulfc2.repl.co/api/goodbye2?name=' +
                  encodeURI(_0x1a177c.split('@')[0]) +
                  '&mem=' +
                  encodeURI(memeg) +
                  '&gcname=' +
                  encodeURI(_0x240e18.subject) +
                  '&picurl=' +
                  ppu +
                  '&desc=baca&bgurl=' +
                  background_welcome +
                  '&gcicon=' +
                  ppgc
              )
            } catch {
              leave = Buffer.isBuffer(ppuser)
                ? ppuser
                : /^data:.*?\/.*?;base64,/i.test(ppuser)
                ? Buffer.from(ppuser.split`,`[1], 'base64')
                : /^https?:\/\//.test(ppuser)
                ? await (await fetch(ppuser)).buffer()
                : fs.existsSync(ppuser)
                ? fs.readFileSync(ppuser)
                : Buffer.alloc(0)
            }
            var _0x7871d =
              'Yah Kok Keluar Dari *' +
              _0x240e18.subject +
              '*, Sayonara @' +
              _0x1a177c.split('@')[0] +
              ' :('
            const _0x4de3f3 = {
              degreesLatitude: 0,
              degreesLongitude: 0,
              jpegThumbnail: leave,
            }
            var _0x33a7b1 = generateWAMessageFromContent(
              _0x327e85.id,
              {
                templateMessage: {
                  hydratedTemplate: {
                    locationMessage: _0x4de3f3,
                    hydratedContentText:
                      lang.leave() +
                      ' ' +
                      (_0x1a177c.split('@')[0] +
                        ' Leaving From ' +
                        _0x240e18.subject),
                    hydratedFooterText: '\xA9 ' + ownername,
                    hydratedButtons: [
                      {
                        urlButton: {
                          displayText: 'YouTube Creator',
                          url: '' + youtube,
                        },
                      },
                      {
                        urlButton: {
                          displayText: "Rest Api's",
                          url: '' + myweb,
                        },
                      },
                      {
                        quickReplyButton: {
                          displayText: 'Donasi',
                          id: 'donate',
                        },
                      },
                      {
                        quickReplyButton: {
                          displayText: 'Owner',
                          id: 'owner',
                        },
                      },
                    ],
                  },
                },
              },
              {}
            )
            _0x7d5bfc.relayMessage(_0x327e85.id, _0x33a7b1.message, {
              messageId: _0x33a7b1.key.id,
            })
          } else {
            if (_0x327e85.action == 'promote') {
              const _0x38bdcd = { url: ppuser }
              const _0x42dec9 = { mentionedJid: [_0x1a177c] }
              _0x7d5bfc.sendMessage(_0x327e85.id, {
                image: _0x38bdcd,
                contextInfo: _0x42dec9,
                caption:
                  '@' +
                  _0x1a177c.split('@')[0] +
                  ' Promote From ' +
                  _0x240e18.subject,
              })
            } else {
              if (_0x327e85.action == 'demote') {
                const _0x304256 = { url: ppuser }
                const _0x4bccbe = { mentionedJid: [_0x1a177c] }
                _0x7d5bfc.sendMessage(_0x327e85.id, {
                  image: _0x304256,
                  contextInfo: _0x4bccbe,
                  caption:
                    '@' +
                    _0x1a177c.split('@')[0] +
                    ' Demote From ' +
                    _0x240e18.subject,
                })
              }
            }
          }
        }
      }
    } catch (_0x37962f) {
      console.log(_0x37962f)
    }
  })
  _0x7d5bfc.public = true
  _0x7d5bfc.ev.on('connection.update', async (_0x3ba5f9) => {
    const { connection: _0x363683, lastDisconnect: _0x246a52 } = _0x3ba5f9
    if (_0x363683 === 'close') {
      _0x246a52.error?.output?.statusCode !== DisconnectReason.loggedOut
        ? startalpha()
        : console.log(color('Koneksi Terputus...', 'skyblue'))
    }
    console.log(color('Connected ...', 'magenta'), _0x3ba5f9)
  })
  _0x7d5bfc.ev.on('creds.update', saveState)
  _0x7d5bfc.decodeJid = (_0x5dc272) => {
    if (!_0x5dc272) {
      return _0x5dc272
    }
    if (/:\d+@/gi.test(_0x5dc272)) {
      let _0x4e5d74 = jidDecode(_0x5dc272) || {}
      return (
        (_0x4e5d74.user &&
          _0x4e5d74.server &&
          _0x4e5d74.user + '@' + _0x4e5d74.server) ||
        _0x5dc272
      )
    } else {
      return _0x5dc272
    }
  }
  _0x7d5bfc.ev.on('contacts.update', (_0x557e9a) => {
    for (let _0x4908fe of _0x557e9a) {
      let _0x56a4bf = _0x7d5bfc.decodeJid(_0x4908fe.id)
      if (store && store.contacts) {
        store.contacts[_0x56a4bf] = {
          id: _0x56a4bf,
          name: _0x4908fe.notify,
        }
      }
    }
  })
  _0x7d5bfc.getName = (_0x55299b, _0x350abe = false) => {
    id = _0x7d5bfc.decodeJid(_0x55299b)
    _0x350abe = _0x7d5bfc.withoutContact || _0x350abe
    let _0x536e46
    if (id.endsWith('@g.us')) {
      return new Promise(async (_0x4e7f48) => {
        _0x536e46 = store.contacts[id] || {}
        if (!(_0x536e46.name || _0x536e46.subject)) {
          _0x536e46 = _0x7d5bfc.groupMetadata(id) || {}
        }
        _0x4e7f48(
          _0x536e46.name ||
            _0x536e46.subject ||
            PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber(
              'international'
            )
        )
      })
    } else {
      _0x536e46 =
        id === '0@s.whatsapp.net'
          ? {
              id: id,
              name: 'WhatsApp',
            }
          : id === _0x7d5bfc.decodeJid(_0x7d5bfc.user.id)
          ? _0x7d5bfc.user
          : store.contacts[id] || {}
    }
    return (
      (_0x350abe ? '' : _0x536e46.name) ||
      _0x536e46.subject ||
      _0x536e46.verifiedName ||
      PhoneNumber('+' + _0x55299b.replace('@s.whatsapp.net', '')).getNumber(
        'international'
      )
    )
  }
  _0x7d5bfc.sendContact = async (
    _0x76060c,
    _0x4776d7,
    _0x3a2138 = '',
    _0x3c6740 = {}
  ) => {
    let _0x3ebf9c = []
    for (let _0xd7dc0e of _0x4776d7) {
      _0x3ebf9c.push(
        {
          displayName: await _0x7d5bfc.getName(_0xd7dc0e + '@s.whatsapp.net'),
          vcard:
            'BEGIN:VCARD\nVERSION:3.0\nN:' +
            (await _0x7d5bfc.getName(_0xd7dc0e + '@s.whatsapp.net')) +
            '\nFN:' +
            (await _0x7d5bfc.getName(_0xd7dc0e + '@s.whatsapp.net')) +
            '\nitem1.TEL;waid=' +
            _0xd7dc0e +
            ':' +
            _0xd7dc0e +
            '\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:' +
            email +
            '\nitem2.X-ABLabel:Email\nitem3.URL:' +
            myweb +
            '\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;' +
            region +
            ';;;;\nitem4.X-ABLabel:Region\nEND:VCARD',
        },
        {
          displayName: await _0x7d5bfc.getName('6288279268363@s.whatsapp.net'),
          vcard:
            'BEGIN:VCARD\nVERSION:3.0\nN:ZeeoneOfc\nFN:ᴹᴿ᭄ King Of Bear \xD7፝֟͜\xD7\nitem1.TEL;waid=6288279268363:6288279268863\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:drakipul1016@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/drak_ipul123\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD',
        }
      )
    }
    const _0x4ad676 = {
      displayName: _0x3ebf9c.length + ' Kontak',
      contacts: _0x3ebf9c,
    }
    const _0x44d912 = {
        contacts: _0x4ad676,
        ..._0x3c6740,
      },
      _0xd14240 = { quoted: _0x3a2138 }
    _0x7d5bfc.sendMessage(_0x76060c, _0x44d912, _0xd14240)
  }
  _0x7d5bfc.sendButtonText = (
    _0x416a7a,
    _0x2fed39 = [],
    _0x3a9ac2,
    _0x123809,
    _0x204ced = '',
    _0x138538 = {}
  ) => {
    const _0x3cafcf = {
      text: _0x3a9ac2,
      footer: _0x123809,
      buttons: _0x2fed39,
      headerType: 2,
      ..._0x138538,
    }
    let _0x1f4222 = _0x3cafcf
    const _0x2f962d = {
      quoted: _0x204ced,
      ..._0x138538,
    }
    _0x7d5bfc.sendMessage(_0x416a7a, _0x1f4222, _0x2f962d)
  }
  _0x7d5bfc.sendText = (_0x5b8cdf, _0xab7152, _0x35dd5d = '', _0x2235a3) =>
    _0x7d5bfc.sendMessage(
      _0x5b8cdf,
      {
        text: _0xab7152,
        ..._0x2235a3,
      },
      { quoted: _0x35dd5d }
    )
  _0x7d5bfc.sendFakeLink = (
    _0xb42060,
    _0x26cea7,
    _0x10eae9,
    _0x38f268,
    _0x1143f5,
    _0x31a6d2,
    _0x459735,
    _0xc4b6df
  ) =>
    _0x7d5bfc.sendMessage(
      _0xb42060,
      {
        text: _0x26cea7,
        contextInfo: {
          externalAdReply: {
            title: 'Selamat ' + _0x10eae9 + ' ' + _0x38f268,
            body: '\xA9 ' + _0x1143f5,
            previewType: 'PHOTO',
            thumbnailUrl: '',
            thumbnail: fs.readFileSync(_0x31a6d2),
            sourceUrl: '' + _0x459735,
          },
        },
      },
      { quoted: _0xc4b6df }
    )
  _0x7d5bfc.send5ButLoc = (
    _0x42770c,
    _0x67790b = '',
    _0x23f4d7 = '',
    _0x56717f,
    _0x2cdc23 = [],
    _0x1083fc = {}
  ) => {
    const _0x10e687 = {
      degreesLatitude: 0,
      degreesLongitude: 0,
      jpegThumbnail: _0x56717f,
    }
    const _0x5ecab2 = {
      locationMessage: _0x10e687,
      hydratedContentText: _0x67790b,
      hydratedFooterText: _0x23f4d7,
      hydratedButtons: _0x2cdc23,
    }
    const _0x40405b = { hydratedTemplate: _0x5ecab2 }
    const _0x5aabf0 = { templateMessage: _0x40405b }
    var _0xbf62a2 = generateWAMessageFromContent(
      _0x42770c,
      _0x5aabf0,
      _0x1083fc
    )
    _0x7d5bfc.relayMessage(_0x42770c, _0xbf62a2.message, {
      messageId: _0xbf62a2.key.id,
    })
  }
  _0x7d5bfc.sendListMenu = async (
    _0x2fefbf,
    _0x1a6aaf = '',
    _0x28bf35 = '',
    _0x1489c9 = 'Welcome \uD83C\uDF80',
    _0x5c1f6d = 'CLICK HERE',
    _0x3558f2 = {}
  ) => {
    const _0x14092a = {
      title: 'ALL MENU BOT [ \uD83E\uDD16 ]',
      rows: [
        {
          title: 'ALL MENU',
          rowId: 'allmenu',
          description: '',
        },
      ],
    }
    const _0x10060a = {
      title: 'SUB MENU KE-1 [ \u2049️ ]',
      rows: [
        {
          title: 'Information Command',
          rowId: 'infocmd',
          description: '',
        },
      ],
    }
    const _0x5e939c = {
      title: 'SUB MENU KE-2 [ \uD83D\uDC66 ]',
      rows: [
        {
          title: 'Owner Command',
          rowId: 'ownercmd',
          description: '',
        },
      ],
    }
    const _0x1023fc = {
      title: 'SUB MENU KE-3 [ \uD83D\uDCC1 ]',
      rows: [
        {
          title: 'Database Command',
          rowId: 'databasecmd',
          description: '',
        },
      ],
    }
    const _0x596884 = {
      title: 'SUB MENU KE-4 [ \uD83D\uDC65 ]',
      rows: [
        {
          title: 'Group Command',
          rowId: 'groupcmd',
          description: '',
        },
      ],
    }
    const _0x4d7732 = {
      title: 'SUB MENU KE-5 [ \u26E9️ ]',
      rows: [
        {
          title: 'Anime Command',
          rowId: 'animecmd',
          description: '',
        },
      ],
    }
    const _0x36a2bf = {
      title: 'SUB MENU KE-6 [ \u26A0️ ]',
      rows: [
        {
          title: 'Tag Command',
          rowId: 'tagcmd',
          description: '',
        },
      ],
    }
    const _0x380533 = {
      title: 'SUB MENU KE-7 [ \uD83E\uDDD0 ]',
      rows: [
        {
          title: 'Stalking Command',
          rowId: 'stalkcmd',
          description: '',
        },
      ],
    }
    const _0x18b33a = {
      title: 'SUB MENU KE-8 [ \uD83D\uDD0E ]',
      rows: [
        {
          title: 'Search Command',
          rowId: 'searchcmd',
          description: '',
        },
      ],
    }
    const _0x279b47 = {
      title: 'SUB MENU KE-9 [ \uD83E\uDDFF ]',
      rows: [
        {
          title: 'Converter Command',
          rowId: 'convertercmd',
          description: '',
        },
      ],
    }
    const _0x4ff2a2 = {
      title: 'SUB MENU KE-10 [ \uD83D\uDDBC️ ]',
      rows: [
        {
          title: 'Image Effect Command',
          rowId: 'stickercmd',
          description: '',
        },
      ],
    }
    const _0xdbc164 = {
      title: 'SUB MENU KE-11 [ \uD83D\uDC7B ]',
      rows: [
        {
          title: 'Sticker Effect Command',
          rowId: 'stickercmd2',
          description: '',
        },
      ],
    }
    const _0x135afd = {
      title: 'SUB MENU KE-12 [ \uD83D\uDCE5 ]',
      rows: [
        {
          title: 'Downloader Command',
          rowId: 'downloadercmd',
          description: '',
        },
      ],
    }
    const _0x171945 = {
      title: 'SUB MENU KE-13 [ \uD83C\uDF8E ]',
      rows: [
        {
          title: 'Random Anime Command',
          rowId: 'ranimecmd',
          description: '',
        },
      ],
    }
    const _0x12e243 = {
      title: 'SUB MENU KE-14 [ \uD83D\uDCEC ]',
      rows: [
        {
          title: 'Nsfw & Sfw Command',
          rowId: 'nsfwcmd',
          description: '',
        },
      ],
    }
    const _0xc196b4 = {
      title: 'SUB MENU KE-15 [ \u2642️ ]',
      rows: [
        {
          title: 'Text Pro Command',
          rowId: 'textprocmd',
          description: '',
        },
      ],
    }
    const _0x4eb27f = {
      title: 'SUB MENU KE-16 [ \u2640️ ]',
      rows: [
        {
          title: 'Others Command',
          rowId: 'othercmd',
          description: '',
        },
      ],
    }
    const _0x57cfd3 = {
      title: 'SUB MENU KE-17 [ \uD83C\uDFAE ]',
      rows: [
        {
          title: 'Games Command',
          rowId: 'gamecmd',
          description: '',
        },
      ],
    }
    const _0x29729f = {
      title: 'SUB MENU KE-18 [ \uD83D\uDCFA ]',
      rows: [
        {
          title: 'Asupan Command',
          rowId: 'asupancmd',
          description: '',
        },
      ],
    }
    const _0x2e9241 = {
      title: 'SUB MENU KE-19 [ \uD83D\uDC6D ]',
      rows: [
        {
          title: 'Cecan Command',
          rowId: 'cecancmd',
          description: '',
        },
      ],
    }
    const _0xbb74db = {
      title: 'SUB MENU KE-20 [ \uD83C\uDF1F ]',
      rows: [
        {
          title: 'Primbon Command',
          rowId: 'primboncmd',
          description: '',
        },
      ],
    }
    const _0x33dde9 = {
      title: 'SUB MENU KE-21 [ \uD83E\uDD41 ]',
      rows: [
        {
          title: 'Telesticker Command',
          rowId: 'telecmd',
          description: '',
        },
      ],
    }
    const _0x252b4b = {
      title: 'Thanks To [ \uD83D\uDC68‍\uD83D\uDCBB ]',
      rows: [
        {
          title: 'Contributors',
          rowId: 'thanksto',
          description: '',
        },
      ],
    }
    const _0x286639 = [
        _0x14092a,
        _0x10060a,
        _0x5e939c,
        _0x1023fc,
        _0x596884,
        _0x4d7732,
        _0x36a2bf,
        _0x380533,
        _0x18b33a,
        _0x279b47,
        _0x4ff2a2,
        _0xdbc164,
        _0x135afd,
        _0x171945,
        _0x12e243,
        _0xc196b4,
        _0x4eb27f,
        _0x57cfd3,
        _0x29729f,
        _0x2e9241,
        _0xbb74db,
        _0x33dde9,
        _0x252b4b,
      ],
      _0x1eb01e = {
        text: _0x1a6aaf,
        footer: _0x28bf35,
        title: _0x1489c9,
        buttonText: _0x5c1f6d,
        sections: _0x286639,
      }
    listMessage = _0x1eb01e
    _0x7d5bfc.sendMessage(_0x2fefbf, listMessage, _0x3558f2)
  }
  _0x7d5bfc.sendList = async (
    _0x1f387b,
    _0x5aa64b = '',
    _0x5593bd = '',
    _0x463dd0 = 'Welcome \uD83C\uDF80',
    _0x18e6d5 = 'CLICK HERE',
    _0x1284c5 = [],
    _0x4a057b = {}
  ) => {
    const _0xe624e1 = {
      text: _0x5aa64b,
      footer: _0x5593bd,
      title: _0x463dd0,
      buttonText: _0x18e6d5,
      sections: _0x1284c5,
    }
    listMessage = _0xe624e1
    _0x7d5bfc.sendMessage(_0x1f387b, listMessage, _0x4a057b)
  }
  _0x7d5bfc.sendButMessage = async (
    _0x57aa20,
    _0x28f3b7 = '',
    _0x120a9e = '',
    _0x858fdc = [],
    _0x4e04e5 = {}
  ) => {
    const _0x3998f0 = {
      text: _0x28f3b7,
      footer: _0x120a9e,
      buttons: _0x858fdc,
      headerType: 1,
    }
    buttonMessage = _0x3998f0
    _0x7d5bfc.sendMessage(_0x57aa20, buttonMessage, _0x4e04e5)
  }
  _0x7d5bfc.send1ButMes = (
    _0x2ecf69,
    _0x5d6bdf = '',
    _0x301c5f = '',
    _0x7846c7 = '',
    _0x2583c8 = '',
    _0x2e1990,
    _0x4fcb94
  ) => {
    const _0x4189b = { displayText: _0x2583c8 }
    const _0x41aac3 = {
      buttonId: _0x7846c7,
      buttonText: _0x4189b,
      type: 1,
    }
    let _0xab93dc = [_0x41aac3]
    const _0x7e405 = {
      text: _0x5d6bdf,
      buttons: _0xab93dc,
      footer: _0x301c5f,
      mentions: _0x4fcb94 ? _0x4fcb94 : [],
    }
    let _0x348131 = _0x7e405
    const _0x1a8373 = { quoted: _0x2e1990 }
    _0x7d5bfc.sendMessage(_0x2ecf69, _0x348131, _0x1a8373)
  }
  _0x7d5bfc.send2ButMes = (
    _0x38abdb,
    _0x1406dc = '',
    _0x4c277f = '',
    _0x3611a2 = '',
    _0x29937e = '',
    _0x3ece3e = '',
    _0x27dda7 = '',
    _0x6927cb,
    _0x1a3058
  ) => {
    const _0x416153 = { displayText: _0x29937e }
    const _0x19cea5 = {
      buttonId: _0x3611a2,
      buttonText: _0x416153,
      type: 1,
    }
    const _0x34cdc3 = { displayText: _0x27dda7 }
    const _0x2c1697 = {
      buttonId: _0x3ece3e,
      buttonText: _0x34cdc3,
      type: 1,
    }
    let _0x5dce0a = [_0x19cea5, _0x2c1697]
    const _0x59466c = {
      text: _0x1406dc,
      buttons: _0x5dce0a,
      footer: _0x4c277f,
      mentions: _0x1a3058 ? _0x1a3058 : [],
    }
    let _0x3329f3 = _0x59466c
    const _0x31a851 = { quoted: _0x6927cb }
    _0x7d5bfc.sendMessage(_0x38abdb, _0x3329f3, _0x31a851)
  }
  _0x7d5bfc.send3ButMes = (
    _0x39ac08,
    _0x31f79f = '',
    _0x5f2a3c = '',
    _0x39c844 = '',
    _0x359a4c = '',
    _0xb2b2d2 = '',
    _0x194e66 = '',
    _0x2a1469 = '',
    _0x1aa676 = '',
    _0x359b2c,
    _0x3fc71
  ) => {
    const _0x29e486 = { displayText: _0x359a4c }
    const _0x549d72 = {
      buttonId: _0x39c844,
      buttonText: _0x29e486,
      type: 1,
    }
    const _0x383baf = { displayText: _0x194e66 }
    const _0x3e8b18 = {
      buttonId: _0xb2b2d2,
      buttonText: _0x383baf,
      type: 1,
    }
    const _0x5b148a = { displayText: _0x1aa676 }
    const _0x302b50 = {
      buttonId: _0x2a1469,
      buttonText: _0x5b148a,
      type: 1,
    }
    let _0x15aaec = [_0x549d72, _0x3e8b18, _0x302b50]
    const _0x4b7177 = {
      text: _0x31f79f,
      buttons: _0x15aaec,
      footer: _0x5f2a3c,
      mentions: _0x3fc71 ? _0x3fc71 : [],
    }
    let _0x581c36 = _0x4b7177
    const _0x17c538 = { quoted: _0x359b2c }
    _0x7d5bfc.sendMessage(_0x39ac08, _0x581c36, _0x17c538)
  }
  _0x7d5bfc.sendKatalog = async (
    _0x3966a5,
    _0x52e14b = '',
    _0x2cc404 = '',
    _0x46c6a5,
    _0x43ff4b = {}
  ) => {
    const _0x58a4da = generateWAMessageFromContent(
      _0x3966a5,
      {
        productMessage: {
          product: {
            productImage: {
              url: 'https://mmg.whatsapp.net/d/f/ApB9FM5wpdh-vIFBU_eh6oNUGfydsIPHeH5g948qu8ei.enc',
              mimetype: 'image/jpeg',
              fileSha256: 'p4HuRqm7bqae/spDY4q6UCGc8pmIt+Nw4T7AqCYjI1U=',
              fileLength: '999999999999999',
              mediaKey: 'PocZSjTMz/cehHKI0CiPG0J7gMHZHWUP+asVhdNHwuQ=',
              fileEncSha256: 'WmHKTxEV8v82TwD1CwOHSNG9wxUkJ53j8/7YUvQkwUY=',
              jpegThumbnail: _0x46c6a5,
            },
            productId: '9999',
            title: _0x52e14b,
            description: _0x2cc404,
            currencyCode: 'IDR',
            priceAmount1000: '9999999999000',
            url: '' + myweb,
            productImageCount: 1,
            salePriceAmount1000: '0',
          },
          businessOwnerJid: '6288279268363@s.whatsapp.net',
        },
      },
      _0x43ff4b
    )
    _0x7d5bfc.relayMessage(_0x3966a5, _0x58a4da.message, {
      messageId: _0x58a4da.key.id,
    })
  }
  _0x7d5bfc.sendKatalog2 = async (
    _0x58df3d,
    _0x115f7f = '',
    _0x1c770f = '',
    _0x32f39d,
    _0xfa238b = {}
  ) => {
    const _0x2ba508 = generateWAMessageFromContent(
      _0x58df3d,
      {
        productMessage: {
          product: {
            productImage: {
              url: 'https://mmg.whatsapp.net/d/f/ApB9FM5wpdh-vIFBU_eh6oNUGfydsIPHeH5g948qu8ei.enc',
              mimetype: 'image/jpeg',
              fileSha256: 'p4HuRqm7bqae/spDY4q6UCGc8pmIt+Nw4T7AqCYjI1U=',
              fileLength: '999999999999999',
              mediaKey: 'PocZSjTMz/cehHKI0CiPG0J7gMHZHWUP+asVhdNHwuQ=',
              fileEncSha256: 'WmHKTxEV8v82TwD1CwOHSNG9wxUkJ53j8/7YUvQkwUY=',
              jpegThumbnail: _0x32f39d,
            },
            productId: '9999',
            title: _0x115f7f,
            description: _0x1c770f,
            currencyCode: 'IDR',
            priceAmount1000: '9999999999000',
            url: '' + myweb,
            productImageCount: 1,
            salePriceAmount1000: '9999999',
          },
          businessOwnerJid: '6288279268363@s.whatsapp.net',
        },
      },
      _0xfa238b
    )
    _0x7d5bfc.relayMessage(_0x58df3d, _0x2ba508.message, {
      messageId: _0x2ba508.key.id,
    })
  }
  _0x7d5bfc.send5ButImg = async (
    _0x26da18,
    _0x322bc9 = '',
    _0x58c4eb = '',
    _0x34d442,
    _0x17c635 = [],
    _0x11a9b9 = {}
  ) => {
    const _0xa30dca = { image: _0x34d442 }
    const _0x342481 = { upload: _0x7d5bfc.waUploadToServer }
    let _0x2ec4bf = await prepareWAMessageMedia(_0xa30dca, _0x342481)
    const _0x370e03 = {
      imageMessage: _0x2ec4bf.imageMessage,
      hydratedContentText: _0x322bc9,
      hydratedFooterText: _0x58c4eb,
      hydratedButtons: _0x17c635,
    }
    const _0x122f54 = { hydratedTemplate: _0x370e03 }
    const _0x3a56d2 = { templateMessage: _0x122f54 }
    const _0x174e58 = generateWAMessageFromContent(
      _0x26da18,
      proto.Message.fromObject(_0x3a56d2),
      _0x11a9b9
    )
    _0x7d5bfc.relayMessage(_0x26da18, _0x174e58.message, {
      messageId: _0x174e58.key.id,
    })
  }
  _0x7d5bfc.send5ButGif = async (
    _0x4d3195,
    _0x2811ae = '',
    _0x365c78 = '',
    _0x6c506f,
    _0x1bac1d = [],
    _0x3513b2 = {}
  ) => {
    var _0x3b7cdd = generateWAMessageFromContent(
      _0x4d3195,
      {
        templateMessage: {
          hydratedTemplate: {
            videoMessage: {
              url: 'https://mmg.whatsapp.net/d/f/AkqcWrK_N51uwMcghemGnmtI2fIHxrKxmGVVagOj7Vx_.enc',
              mimetype: 'video/mp4',
              fileSha256: '9HFfCn2DFMMA0q7oGSNLnkcS0oHyWYhgNjZc3jMdmgM=',
              fileLength: '40095',
              seconds: 1,
              mediaKey: 'qjLd9v4j4wwrqvc337xlsQxsh8CPA2taYWXeNikpqbk=',
              gifPlayback: true,
              height: 282,
              width: 360,
              fileEncSha256: 'O3c/PvHTVMxYdCvA8XEJN7DfNAqOtOmY01Ks5IrMrns=',
              directPath:
                '/v/t62.9505-24/35323286_1064761687644028_8684791954997475835_n.enc?ccb=11-4&oh=01_AVxv0AATLv7IBBykoTcRptvsvw-wupPIHKwwwsXnVfJNmQ&oe=61EFE00E',
              mediaKeyTimestamp: '1640746529',
              jpegThumbnail: _0x6c506f,
              gifAttribution: 'TENOR',
            },
            hydratedContentText: _0x2811ae,
            hydratedFooterText: _0x365c78,
            hydratedButtons: _0x1bac1d,
          },
        },
      },
      _0x3513b2
    )
    _0x7d5bfc.relayMessage(_0x4d3195, _0x3b7cdd.message, {
      messageId: _0x3b7cdd.key.id,
    })
  }
  _0x7d5bfc.sendButImg = async (
    _0x18eb39,
    _0x15c712 = '',
    _0x11dc57 = '',
    _0x493cb2,
    _0x4ed33d = [],
    _0xb3e036 = {}
  ) => {
    const _0x3331b3 = {
      caption: _0x15c712,
      image: _0x493cb2,
      footerText: _0x11dc57,
      buttons: _0x4ed33d,
      headerType: 'IMAGE',
    }
    _0x7d5bfc.sendMessage(_0x18eb39, _0x3331b3, _0xb3e036)
  }
  _0x7d5bfc.sendButImgp = async (
    _0x1d214f,
    _0x4fcc49,
    _0x32b596,
    _0xe29821 = '',
    _0x47c2c6 = '',
    _0x353a46 = [],
    _0xc92415 = {}
  ) => {
    var _0x4bb8a4 = await getBuffer(
      'https://api-alphabot.herokuapp.com/api/photooxy/' +
        _0x32b596 +
        '?apikey=offline&text=' +
        _0xe29821 +
        '&text2=' +
        _0x47c2c6
    )
    const _0x2b5874 = {
      caption: _0x4fcc49,
      image: _0x4bb8a4,
      footerText: 'Phootoxy',
      buttons: _0x353a46,
      headerType: 'IMAGE',
    }
    _0x7d5bfc.sendMessage(_0x1d214f, _0x2b5874, _0xc92415)
  }
  _0x7d5bfc.sendButImgt = async (
    _0x1d16a6,
    _0x4f8a88,
    _0x681040,
    _0x5a279f = '',
    _0x82f15c = '',
    _0x162aaa = [],
    _0x332995 = {}
  ) => {
    var _0x16efe0 = await getBuffer(
      'https://api-alphabot.herokuapp.com/api/textpro/' +
        _0x681040 +
        '?apikey=offline&text=' +
        _0x5a279f +
        '&text2=' +
        _0x82f15c
    )
    const _0x57e7c4 = {
      caption: _0x4f8a88,
      image: _0x16efe0,
      footerText: 'Textpro',
      buttons: _0x162aaa,
      headerType: 'IMAGE',
    }
    _0x7d5bfc.sendMessage(_0x1d16a6, _0x57e7c4, _0x332995)
  }
  _0x7d5bfc.sendImage = async (
    _0x5e0c36,
    _0x2e2d73,
    _0x4d8657 = '',
    _0x4b9e7c = '',
    _0x32bc6a
  ) => {
    let _0x2c5131 = Buffer.isBuffer(_0x2e2d73)
      ? _0x2e2d73
      : /^data:.*?\/.*?;base64,/i.test(_0x2e2d73)
      ? Buffer.from(_0x2e2d73.split`,`[1], 'base64')
      : /^https?:\/\//.test(_0x2e2d73)
      ? await (await fetch(_0x2e2d73)).buffer()
      : fs.existsSync(_0x2e2d73)
      ? fs.readFileSync(_0x2e2d73)
      : Buffer.alloc(0)
    const _0xc86bb2 = {
      image: _0x2c5131,
      caption: _0x4d8657,
      ..._0x32bc6a,
    }
    const _0x454d83 = {}
    return (
      (_0x454d83.quoted = _0x4b9e7c),
      await _0x7d5bfc.sendMessage(_0x5e0c36, _0xc86bb2, _0x454d83)
    )
  }
  _0x7d5bfc.sendVideo = async (
    _0x32e93e,
    _0x1f1e8d,
    _0x267308 = false,
    _0xb5ed31 = '',
    _0x2c619f = '',
    _0x1fe6b7
  ) => {
    let _0x4c732e = Buffer.isBuffer(_0x1f1e8d)
      ? _0x1f1e8d
      : /^data:.*?\/.*?;base64,/i.test(_0x1f1e8d)
      ? Buffer.from(_0x1f1e8d.split`,`[1], 'base64')
      : /^https?:\/\//.test(_0x1f1e8d)
      ? await (await fetch(_0x1f1e8d)).buffer()
      : fs.existsSync(_0x1f1e8d)
      ? fs.readFileSync(_0x1f1e8d)
      : Buffer.alloc(0)
    const _0x235724 = {
      video: _0x4c732e,
      caption: _0xb5ed31,
      gifPlayback: _0x267308,
      ..._0x1fe6b7,
    }
    const _0x4a278e = {}
    return (
      (_0x4a278e.quoted = _0x2c619f),
      await _0x7d5bfc.sendMessage(_0x32e93e, _0x235724, _0x4a278e)
    )
  }
  _0x7d5bfc.sendAudio = async (
    _0x5da0b4,
    _0x18b7fb,
    _0x5e2a8b = '',
    _0x45db76 = false,
    _0x28c052
  ) => {
    let _0x3ccd16 = Buffer.isBuffer(_0x18b7fb)
      ? _0x18b7fb
      : /^data:.*?\/.*?;base64,/i.test(_0x18b7fb)
      ? Buffer.from(_0x18b7fb.split`,`[1], 'base64')
      : /^https?:\/\//.test(_0x18b7fb)
      ? await (await fetch(_0x18b7fb)).buffer()
      : fs.existsSync(_0x18b7fb)
      ? fs.readFileSync(_0x18b7fb)
      : Buffer.alloc(0)
    const _0x264b01 = {
        audio: _0x3ccd16,
        ptt: _0x45db76,
        ..._0x28c052,
      },
      _0x569ba1 = {}
    return (
      (_0x569ba1.quoted = _0x5e2a8b),
      await _0x7d5bfc.sendMessage(_0x5da0b4, _0x264b01, _0x569ba1)
    )
  }
  _0x7d5bfc.sendTextWithMentions = async (
    _0x5a67c3,
    _0x398dd7,
    _0x32b53c,
    _0x9da351 = {}
  ) =>
    _0x7d5bfc.sendMessage(
      _0x5a67c3,
      {
        text: _0x398dd7,
        contextInfo: {
          mentionedJid: [..._0x398dd7.matchAll(/@(\d{0,16})/g)].map(
            (_0x4cc4f9) => _0x4cc4f9[1] + '@s.whatsapp.net'
          ),
        },
        ..._0x9da351,
      },
      { quoted: _0x32b53c }
    )
  _0x7d5bfc.sendMedia = async (
    _0x1d16c8,
    _0x5985df,
    _0x38d7d8,
    _0x5613b4 = '',
    _0x2fd562 = {}
  ) => {
    let {
      ext: _0x2f5f72,
      mime: _0x152f8e,
      data: _0x12c3d8,
    } = await _0x7d5bfc.getFile(_0x5985df)
    messageType = _0x152f8e.split('/')[0]
    pase = messageType.replace('application', 'document') || messageType
    const _0x3dd9de = {}
    return (
      (_0x3dd9de.quoted = _0x5613b4),
      await _0x7d5bfc.sendMessage(
        m.chat,
        {
          ['' + pase]: _0x12c3d8,
          mimetype: _0x152f8e,
          fileName:
            _0x38d7d8 + _0x2f5f72
              ? _0x38d7d8 + _0x2f5f72
              : getRandom(_0x2f5f72),
          ..._0x2fd562,
        },
        _0x3dd9de
      )
    )
  }
  _0x7d5bfc.sendMediaAsSticker = async (
    _0x265f12,
    _0x23696b,
    _0x429700,
    _0x1ce7e8 = {}
  ) => {
    let {
      ext: _0x1fad20,
      mime: _0x4ba9ce,
      data: _0x46e311,
    } = await _0x7d5bfc.getFile(_0x23696b)
    let _0x2b2ee5 = {
        data: _0x46e311,
        mimetype: _0x4ba9ce,
      },
      _0x1a1eb0
    _0x1ce7e8 && (_0x1ce7e8.packname || _0x1ce7e8.author)
      ? (_0x1a1eb0 = await writeExif(_0x2b2ee5, _0x1ce7e8))
      : (_0x1a1eb0 = /image/.test(_0x4ba9ce)
          ? await imageToWebp(_0x46e311)
          : /video/.test(_0x4ba9ce)
          ? await videoToWebp(_0x46e311)
          : '')
    const _0x32bab9 = { url: _0x1a1eb0 }
    const _0x5ae13c = {
      sticker: _0x32bab9,
      ..._0x1ce7e8,
    }
    const _0x5f4485 = { quoted: _0x429700 }
    await _0x7d5bfc.sendMessage(_0x265f12, _0x5ae13c, _0x5f4485)
    return _0x1a1eb0
  }
  _0x7d5bfc.sendImageAsSticker = async (
    _0x5548df,
    _0x17da4c,
    _0x62eeee,
    _0x18c7c9 = {}
  ) => {
    let _0x33ef3b = Buffer.isBuffer(_0x17da4c)
      ? _0x17da4c
      : /^data:.*?\/.*?;base64,/i.test(_0x17da4c)
      ? Buffer.from(_0x17da4c.split`,`[1], 'base64')
      : /^https?:\/\//.test(_0x17da4c)
      ? await (await fetch(_0x17da4c)).buffer()
      : fs.existsSync(_0x17da4c)
      ? fs.readFileSync(_0x17da4c)
      : Buffer.alloc(0)
    let _0x4a60c3
    _0x18c7c9 && (_0x18c7c9.packname || _0x18c7c9.author)
      ? (_0x4a60c3 = await writeExifImg(_0x33ef3b, _0x18c7c9))
      : (_0x4a60c3 = await imageToWebp(_0x33ef3b))
    const _0x1a51e2 = { url: _0x4a60c3 }
    const _0x2e98e4 = {
        sticker: _0x1a51e2,
        ..._0x18c7c9,
      },
      _0x3bfe0f = { quoted: _0x62eeee }
    await _0x7d5bfc.sendMessage(_0x5548df, _0x2e98e4, _0x3bfe0f)
    return _0x4a60c3
  }
  _0x7d5bfc.sendVideoAsSticker = async (
    _0x8e8203,
    _0x587a04,
    _0x441946,
    _0x574730 = {}
  ) => {
    let _0x2456e8 = Buffer.isBuffer(_0x587a04)
        ? _0x587a04
        : /^data:.*?\/.*?;base64,/i.test(_0x587a04)
        ? Buffer.from(_0x587a04.split`,`[1], 'base64')
        : /^https?:\/\//.test(_0x587a04)
        ? await getBuffer(_0x587a04)
        : fs.existsSync(_0x587a04)
        ? fs.readFileSync(_0x587a04)
        : Buffer.alloc(0),
      _0x26ffd2
    _0x574730 && (_0x574730.packname || _0x574730.author)
      ? (_0x26ffd2 = await writeExifVid(_0x2456e8, _0x574730))
      : (_0x26ffd2 = await videoToWebp(_0x2456e8))
    const _0x25063f = { url: _0x26ffd2 }
    const _0x33edf6 = {
        sticker: _0x25063f,
        ..._0x574730,
      },
      _0x4d871c = { quoted: _0x441946 }
    return (
      await _0x7d5bfc.sendMessage(_0x8e8203, _0x33edf6, _0x4d871c), _0x26ffd2
    )
  }
  _0x7d5bfc.downloadAndSaveMediaMessage = async (
    _0x17ee42,
    _0x221b3b,
    _0x3989de = true
  ) => {
    let _0x111a1d = (_0x17ee42.msg || _0x17ee42).mimetype || '',
      _0x1d529a = _0x111a1d.split('/')[0]
    let _0x6b1d37 = _0x111a1d.split('/')[1]
    trueFileName = _0x3989de ? _0x221b3b + '.' + _0x6b1d37 : _0x221b3b
    const _0x2ea4af = await downloadContentFromMessage(_0x17ee42, _0x1d529a)
    let _0x521cdb = Buffer.from([])
    for await (const _0x44b38c of _0x2ea4af) {
      _0x521cdb = Buffer.concat([_0x521cdb, _0x44b38c])
    }
    return await fs.writeFileSync(trueFileName, _0x521cdb), trueFileName
  }
  _0x7d5bfc.cMod = (
    _0x55f1cf,
    _0x630bb1,
    _0x1cc217 = '',
    _0x3f7641 = _0x7d5bfc.user.id,
    _0x2bfec3 = {}
  ) => {
    let _0x344771 = Object.keys(_0x630bb1.message)[0],
      _0x2a0e00 = _0x344771 === 'ephemeralMessage'
    _0x2a0e00 &&
      (_0x344771 = Object.keys(_0x630bb1.message.ephemeralMessage.message)[0])
    let _0xaebc1a = _0x2a0e00
        ? _0x630bb1.message.ephemeralMessage.message
        : _0x630bb1.message,
      _0xf0d399 = _0xaebc1a[_0x344771]
    if (typeof _0xf0d399 === 'string') {
      _0xaebc1a[_0x344771] = _0x1cc217 || _0xf0d399
    } else {
      if (_0xf0d399.caption) {
        _0xf0d399.caption = _0x1cc217 || _0xf0d399.caption
      } else {
        if (_0xf0d399.text) {
          _0xf0d399.text = _0x1cc217 || _0xf0d399.text
        }
      }
    }
    if (typeof _0xf0d399 !== 'string') {
      _0xaebc1a[_0x344771] = {
        ..._0xf0d399,
        ..._0x2bfec3,
      }
    }
    if (_0x630bb1.key.participant) {
      _0x3f7641 = _0x630bb1.key.participant =
        _0x3f7641 || _0x630bb1.key.participant
    } else {
      if (_0x630bb1.key.participant) {
        _0x3f7641 = _0x630bb1.key.participant =
          _0x3f7641 || _0x630bb1.key.participant
      }
    }
    if (_0x630bb1.key.remoteJid.includes('@s.whatsapp.net')) {
      _0x3f7641 = _0x3f7641 || _0x630bb1.key.remoteJid
    } else {
      if (_0x630bb1.key.remoteJid.includes('@broadcast')) {
        _0x3f7641 = _0x3f7641 || _0x630bb1.key.remoteJid
      }
    }
    return (
      (_0x630bb1.key.remoteJid = _0x55f1cf),
      (_0x630bb1.key.fromMe = _0x3f7641 === _0x7d5bfc.user.id),
      proto.WebMessageInfo.fromObject(_0x630bb1)
    )
  }
  _0x7d5bfc.copyNForward = async (
    _0x243509,
    _0x3e03e4,
    _0x5ecc80 = false,
    _0x1c68b9 = {}
  ) => {
    let _0x2198c6
    if (_0x1c68b9.readViewOnce) {
      _0x3e03e4.message =
        _0x3e03e4.message &&
        _0x3e03e4.message.ephemeralMessage &&
        _0x3e03e4.message.ephemeralMessage.message
          ? _0x3e03e4.message.ephemeralMessage.message
          : _0x3e03e4.message || undefined
      _0x2198c6 = Object.keys(_0x3e03e4.message.viewOnceMessage.message)[0]
      delete (_0x3e03e4.message && _0x3e03e4.message.ignore
        ? _0x3e03e4.message.ignore
        : _0x3e03e4.message || undefined)
      delete _0x3e03e4.message.viewOnceMessage.message[_0x2198c6].viewOnce
      _0x3e03e4.message = { ..._0x3e03e4.message.viewOnceMessage.message }
    }
    let _0x54a878 = Object.keys(_0x3e03e4.message)[0],
      _0x516230 = await generateForwardMessageContent(_0x3e03e4, _0x5ecc80)
    let _0x1cf73f = Object.keys(_0x516230)[0],
      _0x3ee6f3 = {}
    if (_0x54a878 != 'conversation') {
      _0x3ee6f3 = _0x3e03e4.message[_0x54a878].contextInfo
    }
    _0x516230[_0x1cf73f].contextInfo = {
      ..._0x3ee6f3,
      ..._0x516230[_0x1cf73f].contextInfo,
    }
    const _0x21fc42 = await generateWAMessageFromContent(
      _0x243509,
      _0x516230,
      _0x1c68b9
        ? {
            ..._0x516230[_0x1cf73f],
            ..._0x1c68b9,
            ...(_0x1c68b9.contextInfo
              ? {
                  contextInfo: {
                    ..._0x516230[_0x1cf73f].contextInfo,
                    ..._0x1c68b9.contextInfo,
                  },
                }
              : {}),
          }
        : {}
    )
    return (
      await _0x7d5bfc.relayMessage(_0x243509, _0x21fc42.message, {
        messageId: _0x21fc42.key.id,
      }),
      _0x21fc42
    )
  }
  return (
    (_0x7d5bfc.getFile = async (_0x33c7bd) => {
      let _0x461168
      let _0x4dbf54 = Buffer.isBuffer(_0x33c7bd)
        ? _0x33c7bd
        : /^data:.*?\/.*?;base64,/i.test(_0x33c7bd)
        ? Buffer.from(_0x33c7bd.split`,`[1], 'base64')
        : /^https?:\/\//.test(_0x33c7bd)
        ? await (_0x461168 = await fetch(_0x33c7bd)).buffer()
        : fs.existsSync(_0x33c7bd)
        ? fs.readFileSync(_0x33c7bd)
        : typeof _0x33c7bd === 'string'
        ? _0x33c7bd
        : Buffer.alloc(0)
      if (!Buffer.isBuffer(_0x4dbf54)) {
        throw new TypeError('Result is not a buffer')
      }
      const _0x13a0ea = {
        mime: 'application/octet-stream',
        ext: '.bin',
      }
      let _0x27fad8 = (await FileType.fromBuffer(_0x4dbf54)) || _0x13a0ea
      const _0x4f5857 = {
        res: _0x461168,
        ..._0x27fad8,
      }
      return (_0x4f5857.data = _0x4dbf54), _0x4f5857
    }),
    _0x7d5bfc
  )
}
startalpha()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
