require "bundler/gem_tasks"
require 'fileutils'
require "rspec/core/rake_task"

task :default => %i(clean_assets copy_assets)

desc 'Clean assets'
task :clean_assets do
  `rm -r vendor/assets/javascripts`
end

desc 'Copy assets'
task :copy_assets do
  path = 'vendor/assets/javascripts/ember-components'
  FileUtils.mkdir_p(path)
  FileUtils.cp('lib/ember/components/templates/ember-components.js', "#{path}.module.es6")
  FileUtils.cp_r('addon/templates', path)
  FileUtils.cp_r('addon/components', path)
  Dir["#{path}/components/*.js"].each do |file_path|
    File.open(file_path, 'r')
    basename = File.basename(file_path, '.js')
    File.open("#{path}/components/#{basename}.module.es6", 'w') do |write_f|
      File.open(file_path, 'r') do |read_f|
        read_f.each do |line|
          next if line =~ /^\s*import layout/
          next if line =~ /^\s*layout,/

          write_f.puts line
        end
      end
    end
  end
  FileUtils.rm(Dir.glob("#{path}/components/*.js"))
end
