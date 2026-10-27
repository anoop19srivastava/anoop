import fs from 'fs'
import git from 'isomorphic-git'
import http from 'isomorphic-git/http/node'

const dir = 'C:/Users/Anoop/Desktop/anoop-react-app'
const url = 'https://github.com/anoop19srivastava/anoop.git'

const token = process.argv[2] || process.env.GITHUB_TOKEN

if (!token) {
  console.error('Error: Please provide your GitHub Personal Access Token.')
  console.log('Usage: node push-with-token.mjs <YOUR_GITHUB_TOKEN>')
  process.exit(1)
}

async function push() {
  console.log('Connecting to https://github.com/anoop19srivastava/anoop.git ...')
  try {
    const res = await git.push({
      fs,
      http,
      dir,
      url,
      remoteRef: 'refs/heads/main',
      ref: 'main',
      force: true,
      onAuth: () => ({
        username: token.trim(),
        password: ''
      })
    })
    console.log('✓ Successfully pushed to GitHub main branch!')
    console.log('Repository URL: https://github.com/anoop19srivastava/anoop')
  } catch (err) {
    console.error('Push failed:', err.message || err)
    if (err.data) {
      console.error('Details:', JSON.stringify(err.data))
    }
    process.exit(1)
  }
}

push()
