Artist.destroy_all

Artist.create(:name => 'Norman Lindsay', :nationality => 'Australian', :dob => '1879-02-22', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/commons/3/32/Norman_Lindsay_1931.jpg')
Artist.create(:name => 'Russell Drysdale', :nationality => 'Australian', :dob => '1912-02-07', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Russell_Drysdale_Max_Dupain_1945.jpg')
Artist.create(:name => 'James Gleeson', :nationality => 'Australian', :dob => '1915-11-21', :period => '20th century', :image => 'https://media.artgallery.nsw.gov.au/uploads/artists/James_Gleeson_nla.jpg')
Artist.create(:name => 'Sidney Nolan', :nationality => 'Australian', :dob => '1917-04-22', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Portrait_of_Sidney_Nolan.jpg')
Artist.create(:name => 'Arthur Boyd', :nationality => 'Australian', :dob => '1920-07-24', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/en/9/98/Arthur_Boyd.jpg')
Artist.create(:name => 'Jeffrey Smart', :nationality => 'Australian', :dob => '1921-07-26', :period => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/en/b/b0/Australian_artist_Jeffrey_Smart.jpg')
Artist.create(:name => 'Brett Whiteley', :nationality => 'Australian', :dob => '1939-04-07', :period => '20th century', :image => 'https://www.portrait.gov.au/files/b/9/4/f/i9331.jpg')

puts "#{ Artist.count } artists created."

Work.destroy_all

Work.create(:title => 'Thieves Kitchen', :year => '1929', :medium => 'etching', :style => 'Romantic', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=29145')
Work.create(:title => 'The Rabbiters', :year => '1947', :medium => 'oil on canvas', :style => 'Sun-burnt dinge', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=5520')
Work.create(:title => 'The Darkening Stage', :year => '1991', :medium => 'oil on canvas', :style => 'Surrealist', :image => 'https://content.ngv.vic.gov.au/col-images/api/EPUB001055/1280')
Work.create(:title => 'Carcass', :year => '1953', :medium => 'oil and enamel paint on composition board', :style => 'Sun-burnt splendour', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=57510')
Work.create(:title => 'Bride Running Away', :year => '1957', :medium => 'oil and tempera on composition board', :style => 'Sun-burnt primitivism', :image => 'http://www.abc.net.au/news/image/4197918-3x2-940x627.jpg')
Work.create(:title => 'Portrait of Clive James', :year => '1991 - 1992', :medium => 'oil on canvas', :style => 'Modernist', :image => 'https://media.artgallery.nsw.gov.au/thumbnails/collection_images/2/276.1992%23%23S.jpg.505x464_q85.jpg')
Work.create(:title => 'The Naked Studio', :year => '1981', :medium => '1981', :style => 'Impressionist', :image => 'https://mona.net.au//media/37522/brett-whiteley-the-naked-studio-mona-01.jpg')

puts "#{ Work.count } works created."
