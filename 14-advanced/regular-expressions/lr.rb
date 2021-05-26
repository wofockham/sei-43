# lr.rb - A Ruby line reader (equivalent to grep)
# Usage: ruby lr.rb somefile.txt

ARGF.each do |line|
  puts line
end
