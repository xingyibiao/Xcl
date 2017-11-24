/*
 * @Author: xingyibiao 
 * @Date: 2017-11-20 10:09:02 
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-11-20 13:35:02
 */
'use strict'

const download = require('download-git-repo')
const WEBPACKURL = 'xingyibiao/webpack'

module.exports = (templateName, dirName) => {
  switch (templateName) {
    case 'webpack':
    console.log('start')
    try {
      download(WEBPACKURL, dirName, (err) => {
        console.log('111')
        if (err) {
          throw Error(err)
        }

      })
    } catch (error) {
      console.log(error)
    }
      break;
  }
}