import * as core from '@actions/core'

const input = core.getInput('input', { required: true })

core.info('Received input:')
core.info(input)
