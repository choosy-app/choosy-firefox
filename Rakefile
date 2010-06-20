require 'nokogiri'

task :build do
  install_data = Nokogiri::XML::Document.parse(File.read('install.rdf'))
  version = install_data.xpath('//em:version').text
  exclude_files = Dir.glob('**/{Rakefile,pkg,.[A-Za-z]*}')
  system("zip -r pkg/choosy-#{version}.xpi * -x #{exclude_files.join(' ')}")
end

task :default => :build
