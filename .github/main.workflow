workflow "Test" {
  on = "push"
  resolves = ["Install"]
}

action "Install" {
  needs "Test"
  uses = "actions/npm@master"
  args = "install"
  resolves = ["Build"]
}

action "Build" {
  needs "Install"
  uses = "actions/npm@master"
  args = "build"
  resolves = ["Deploy"]
}

action "Deploy" {
  needs "Build"
  uses = "./"
  needs = "Write sha"
  env = {
    BUILD_DIR = "public/"
  }
  secrets = ["GH_PAT"]
}