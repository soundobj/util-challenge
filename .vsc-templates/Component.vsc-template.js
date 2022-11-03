;(function Template() {
  const camelize = str =>
    str.replace(/\W+(.)/g, (_match, chr) => chr.toUpperCase())

  const lowerCaseFirstLetter = str =>
    str.charAt(0).toLowerCase() + str.slice(1)
  
  return {
     userInputs: [
        {
           title: 'What is the Component Name',
           argumentName: 'name', // will become input in template
           defaultValue: 'test'
        }
     ],
     template: [
        {
           type: 'folder',
           name: inputs => `${camelize(inputs.name)}`,
           children: [
              {
                 type: 'file',
                 name: inputs => `${camelize(inputs.name)}.tsx`,
                 content: inputs => `
  import React from 'react'
  import styles from './${camelize(inputs.name)}.module.scss'

  const ${camelize(inputs.name)} = (props: ${camelize(inputs.name)}Props) => {
  
  return (
    <div className={styles.${lowerCaseFirstLetter(inputs.name)}}>
      ${camelize(inputs.name)}
    </div>
  )
}

export interface ${camelize(inputs.name)}Props {

}

export default ${camelize(inputs.name)}
`
              }
              ,
              {
                 type: 'file',
                 name: inputs => `${camelize(inputs.name)}.module.scss`,
                 content: inputs => `
.${lowerCaseFirstLetter(inputs.name)} {
  background-color: pink;
}
`
              }
           ]
        }
     ]
  }
})