workflow "Test ghpages" {
  on = "push"
  resolves = ["Build"]
}

action "Build" {
  uses = "actions/npm@master"
  args = "install"
  resolves = ["Deploy"]
}

action "Deploy" {
  uses = "./"
  needs = "Write sha"
  env = {
    BUILD_DIR = "public/"
  }
  secrets = ["GH_PAT"]
}