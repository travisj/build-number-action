import * as core from '@actions/core'
import axios from 'axios'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    const key: string = core.getInput('key')
    const url = `https://build-numbers.herokuapp.com/${key}`
    const response = await axios.post(url, github.context, {
      headers: {
        'content-type': 'application/json'
      }
    })
    const buildNumber = response.data
    core.setOutput('build-number', buildNumber)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
