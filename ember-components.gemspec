require_relative 'lib/ember/components/version'

Gem::Specification.new do |spec|
  spec.name          = "ember-components"
  spec.version       = Ember::Components::VERSION
  spec.authors       = ["mugijiru"]
  spec.email         = ["106833+mugijiru@users.noreply.github.com"]

  spec.summary       = %q{Ember.js components}
  spec.homepage      = "https://github.com/mugijiru/ember-components"
  spec.license       = "MIT"
  spec.required_ruby_version = Gem::Requirement.new(">= 2.3.0")

  spec.metadata["allowed_push_host"] = "https://rubygems.pkg.github.com"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = spec.homepage
  spec.metadata["github_repo"] = "ssh://github.com/mugijiru/ember-components.git"
  spec.metadata["git_repo"] = "ssh://github.com/mugijiru/ember-components.git"

  spec.add_dependency "railties", ["~> 5.2"]

  spec.add_dependency "ember-rails", "~> 0.21"
  spec.add_dependency "ember-handlebars-template", ">= 0.1.1", "< 1.0"

  spec.add_development_dependency 'bundler', '~> 1.13'
  spec.add_development_dependency 'rspec', '~> 3.0'

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files = Dir[
    'lib/**/*',
    'vendor/**/*',
    'README.md',
    'LICENSE.md'
  ]

  spec.require_paths = ["lib"]
end
