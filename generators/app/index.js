const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'input your project name',
                default: this.appname
            }
        ])
        .then(answers => {
            this.answers = answers
        })
    }

    writing() {
        const templateUrl = [
            'package-lock.json',
            'package.json',
            'index.html'
        ]
        templateUrl.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}