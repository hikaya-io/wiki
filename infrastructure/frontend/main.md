Frontend apps are deployed using DO apps

- dots-dev (VueJS SPA)
- dots (VueJS SPA)
- Hikaya (Website VuePress)
- Wiki (VuePress)
- Hakawati 

Due to build issues, most of the above apps require setting a proper Node version in `package.json`

- Integration with Github
- domains management
- Alert policies on deployment/configuration failure/success (Slack)
- Log forwarding
- Built-in integration with databases

Drawbacks:

- No previews
- No integrated notifications with Github


CapRover: https://github.com/caprover/caprover

Deployed as a digitalocean One-Click app: https://caprover.com/docs/get-started.html
It includes, among others:
- CLI
- Web GUI
- Nginx
- Basic authentication for pages

`captain-definition` https://caprover.com/docs/captain-definition-file.html