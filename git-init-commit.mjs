import fs from 'fs'
import path from 'path'
import git from 'isomorphic-git'

const dir = 'C:/Users/Anoop/Desktop/anoop-react-app'

async function initAndCommit() {
  console.log('Initializing repository...')
  await git.init({ fs, dir, defaultBranch: 'main' })

  console.log('Reading files...')
  // List files respecting .gitignore
  const filesToStage = []
  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name)
      const relPath = path.relative(dir, fullPath).replace(/\\/g, '/')
      if (
        relPath.startsWith('node_modules') ||
        relPath.startsWith('.git') ||
        relPath.startsWith('dist') ||
        relPath.endsWith('.tmp')
      ) {
        continue
      }
      if (entry.isDirectory()) {
        walk(fullPath)
      } else {
        filesToStage.push(relPath)
      }
    }
  }

  walk(dir)

  console.log(`Staging ${filesToStage.length} files...`)
  for (const file of filesToStage) {
    await git.add({ fs, dir, filepath: file })
  }

  console.log('Committing files...')
  const sha = await git.commit({
    fs,
    dir,
    message: 'Initial commit: React web page for Anoop',
    author: {
      name: 'Anoop',
      email: 'anoop@example.com'
    }
  })

  console.log(`Commit created: ${sha}`)
}

initAndCommit().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
