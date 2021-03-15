require 'ember/components/engine'
require 'ember/components/version'

module Ember
  module Components
    class Error < StandardError; end

    def self.root
      Pathname(__FILE__).join('../../..')
    end
  end
end
