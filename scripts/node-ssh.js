const { NodeSSH: OriginalNodeSSH } = require('node-ssh')

class NodeSSH extends OriginalNodeSSH {
  /**
   * @override
   */
  execCommand() {
    return super.execCommand
      .apply(this, Array.from(arguments))
      .then(({ stdout, stderr }) => stderr ? Promise.reject(stderr) : Promise.resolve(stdout))
  }
}

module.exports = {
  NodeSSH
}
