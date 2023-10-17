const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageDeps = require('./package.json')
const angularVersion = packageDeps.dependencies['@angular/core']

module.exports = {
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      name: 'coreuiRemoteAngularTemplate',
      filename: 'remoteEntry.js',
      exposes: {
        // For microfrontends
        './web-components': './src/bootstrap-exported.ts',

        // For logics
        './background-logic': './src/app/background-logic/background-logic.ts',
      },

      // Libraries shared with the coreui-shell
      shared: {
        // Add these if the MFE will have children
        // '@angular-architects/module-federation': {
        //  
        //   
        //   strictVersion: false,
        //   requiredVersion: packageDeps.dependencies['@angular-architects/module-federation']
        // },
        // '@angular-architects/module-federation-tools': {
        //  
        //   
        //   strictVersion: false,
        //   requiredVersion: packageDeps.dependencies['@angular-architects/module-federation-tools']
        // },
        '@angular/animations': {
         
          
          strictVersion: true,
          requiredVersion: packageDeps.dependencies['@angular/animations']
        },
        // Add this if the MFE uses the Angular CDK
        // '@angular/cdk': {
        //  
        //   
        //   strictVersion: true,
        //   requiredVersion: packageDeps.dependencies['@angular/cdk']
        // },
        '@angular/common': {
         
          
          strictVersion: true,
          requiredVersion: packageDeps.dependencies['@angular/common']
        },
        '@angular/compiler': {
         
          
          strictVersion: true,
          requiredVersion: packageDeps.dependencies['@angular/compiler']
        },
        '@angular/core': {
         
          
          strictVersion: true,
          requiredVersion: packageDeps.dependencies['@angular/core']
        },
        '@angular/elements': {
         
          
          strictVersion: true,
          requiredVersion: packageDeps.dependencies['@angular/elements']
        },
        '@angular/localize': {
         
          
          strictVersion: true,
          requiredVersion: packageDeps.dependencies['@angular/localize']
        },
        // Add this if the MFE uses Angular Forms
        // '@angular/forms': {
        //  
        //   
        //   strictVersion: true,
        //   requiredVersion: packageDeps.dependencies['@angular/forms']
        // },
        // Add this if the MFE uses Angular Material
        // '@angular/material': {
        //  
        //   
        //   strictVersion: true,
        //   requiredVersion: packageDeps.dependencies['@angular/material']
        // },
        // '@angular/material/core': {
        //  
        //   
        //   strictVersion: true,
        //   requiredVersion: packageDeps.dependencies['@angular/material']
        // },
        '@angular/platform-browser': {
         
          
          strictVersion: true,
          requiredVersion: packageDeps.dependencies['@angular/platform-browser']
        },
        '@angular/platform-browser-dynamic': {
         
          
          strictVersion: true,
          requiredVersion: packageDeps.dependencies['@angular/platform-browser-dynamic']
        },
        '@angular/router': {
         
          
          strictVersion: true,
          requiredVersion: packageDeps.dependencies['@angular/router']
        },
        // Remove this if the MFE doesn't use the coreui-sdk
        '@fts/coreui-sdk': {
          singleton: false,
          strictVersion: false,
          requiredVersion: packageDeps.dependencies['@fts/coreui-sdk']
        },
        // Add this if the MFE adds an element to the DOM
        'rxjs': { singleton: false, strictVersion: true, requiredVersion: packageDeps.dependencies['rxjs'] },
        'rxjs/operators': { singleton: false, strictVersion: true, requiredVersion: packageDeps.dependencies['rxjs'] },
        'tslib': { singleton: false, strictVersion: true, requiredVersion: packageDeps.dependencies['tslib'] },
        'zone.js': {eager: true, singleton: false, strictVersion: true, requiredVersion: packageDeps.dependencies['zone.js'] }
      }
    })
  ]
}
