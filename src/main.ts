import * as core from '@actions/core'
import axios from 'axios'

async function run(): Promise<void> {
  try {
    const key: string = core.getInput('key')
    const url = `https://build-numbers.herokuapp.com/${key}`
    const response = await axios.get(url)
    const buildNumber = response.data
    core.setOutput('build-number', buildNumber)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
