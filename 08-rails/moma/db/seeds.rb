Artist.destroy_all

Artist.create(:name => 'Norman Lindsay', :nationality => 'Australian', :dob => '1879-02-22', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/commons/3/32/Norman_Lindsay_1931.jpg')
Artist.create(:name => 'Russell Drysdale', :nationality => 'Australian', :dob => '1912-02-07', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Russell_Drysdale_Max_Dupain_1945.jpg')
Artist.create(:name => 'James Gleeson', :nationality => 'Australian', :dob => '1915-11-21', :period => '20th century', :image => 'https://media.artgallery.nsw.gov.au/uploads/artists/James_Gleeson_nla.jpg')
Artist.create(:name => 'Sidney Nolan', :nationality => 'Australian', :dob => '1917-04-22', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Portrait_of_Sidney_Nolan.jpg')
Artist.create(:name => 'Arthur Boyd', :nationality => 'Australian', :dob => '1920-07-24', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/en/9/98/Arthur_Boyd.jpg')
Artist.create(:name => 'Jeffrey Smart', :nationality => 'Australian', :dob => '1921-07-26', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/en/b/b0/Australian_artist_Jeffrey_Smart.jpg')
Artist.create(:name => 'Brett Whiteley', :nationality => 'Australian', :dob => '1939-04-07', :period => '20th century', :image => 'https://www.portrait.gov.au/files/b/9/4/f/i9331.jpg')

puts "#{ Artist.count } artists created."
