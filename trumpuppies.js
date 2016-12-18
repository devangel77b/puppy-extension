// trumpuppies.js - part of ukitten
// by Tom Royal 
// tomroyal.com

// modified by Dennis Evangelista to do guide dogs puppies
// flickr key 262e2d8627a867729fa6c0bd0f0a2672
// 731486ee95a7a947



// get the puppies from Flickr
//var thePuppies = [];
// initialize thePuppies with a default value
var thePuppies = [
      { "id": "31250921235", "owner": "123726763@N08", "secret": "74be4f8c2f", "server": "5828", "farm": 6, "title": "Wilbur 15 months", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "30757405056", "owner": "62624768@N02", "secret": "94f68da727", "server": "5760", "farm": 6, "title": "Fall Pumpkin", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "30492648930", "owner": "62624768@N02", "secret": "9a9da30c85", "server": "5705", "farm": 6, "title": "Fall Pumpkin", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "30639831241", "owner": "123726763@N08", "secret": "1723814d36", "server": "5512", "farm": 6, "title": "Me and my boy", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "29882172764", "owner": "62624768@N02", "secret": "d0aae35450", "server": "5567", "farm": 6, "title": "Pumpkin or a Pumpkin?", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "30214563440", "owner": "62624768@N02", "secret": "01def361b6", "server": "5695", "farm": 6, "title": "Capitol Pumpkin", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "30167186610", "owner": "63897766@N04", "secret": "7a2ee2a09f", "server": "5779", "farm": 6, "title": "Lola", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "30284360666", "owner": "123726763@N08", "secret": "3a969e082d", "server": "5328", "farm": 6, "title": "Ninja GD PUP", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "30262899966", "owner": "62624768@N02", "secret": "740f8b3df6", "server": "5600", "farm": 6, "title": "Potomac Sunset", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "30056323331", "owner": "123726763@N08", "secret": "4fd5bf53d4", "server": "8592", "farm": 9, "title": "Speak up I can't hear you ...", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "29195005423", "owner": "123726763@N08", "secret": "f1325448d8", "server": "8101", "farm": 9, "title": "Resting face", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "29789637455", "owner": "123726763@N08", "secret": "13d86b9382", "server": "8204", "farm": 9, "title": "\"We're happy on the inside\"", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "29653272452", "owner": "63897766@N04", "secret": "25db5c73fe", "server": "8228", "farm": 9, "title": "Portrait of Lola", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "29113214574", "owner": "63897766@N04", "secret": "42370d1e4d", "server": "8025", "farm": 9, "title": "Hi-Ho Silver away!.....er we're the wrong way round.", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "29684019195", "owner": "123726763@N08", "secret": "0110894a24", "server": "8459", "farm": 9, "title": "Haha I've got the toy!!", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "28954510893", "owner": "123726763@N08", "secret": "f918f5cd75", "server": "8372", "farm": 9, "title": "My boy turned 1", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "29253538155", "owner": "123726763@N08", "secret": "c54f68a6b2", "server": "8007", "farm": 9, "title": "Morning My Love", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "28474080252", "owner": "123726763@N08", "secret": "c511bd4cdb", "server": "8810", "farm": 9, "title": "Part Hippo part guide dog puppy.", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "28244471126", "owner": "123726763@N08", "secret": "5b53d544fc", "server": "8847", "farm": 9, "title": "Where's that spider going?", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "28194327566", "owner": "123726763@N08", "secret": "cd92b11c57", "server": "8778", "farm": 9, "title": "Cocoa", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "27635244982", "owner": "62624768@N02", "secret": "4458e8a464", "server": "7398", "farm": 8, "title": "Pretty in Pink", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "27059211020", "owner": "63897766@N04", "secret": "b0390ab3f9", "server": "7283", "farm": 8, "title": "Lola lay on the deck", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "26066535534", "owner": "123726763@N08", "secret": "c5822fe14b", "server": "1472", "farm": 2, "title": "Happy International Guide Dogs Day", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "26384408060", "owner": "35251120@N07", "secret": "8f4c530ca0", "server": "1660", "farm": 2, "title": "Alan the guide dog puppy", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "26549315995", "owner": "123726763@N08", "secret": "cf9b36d798", "server": "1595", "farm": 2, "title": "Guide dog puppy Preston", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "25879880774", "owner": "123726763@N08", "secret": "1d5b8da008", "server": "1621", "farm": 2, "title": "I see it!", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "26444723066", "owner": "123726763@N08", "secret": "7727d3088a", "server": "1490", "farm": 2, "title": "Why?", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "26407752226", "owner": "123726763@N08", "secret": "0b2321b76e", "server": "1533", "farm": 2, "title": "The old Town Hall..", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "26124379070", "owner": "63368383@N06", "secret": "84dc587fcc", "server": "1630", "farm": 2, "title": "Puppy Ellery", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "26397227355", "owner": "63368383@N06", "secret": "84338ab9e7", "server": "1664", "farm": 2, "title": "JosephGruber_20150815_00055", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "25787490053", "owner": "123726763@N08", "secret": "c78f5a0619", "server": "1518", "farm": 2, "title": "Sheltering from the rain..", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "25194352823", "owner": "123726763@N08", "secret": "154e61f367", "server": "1532", "farm": 2, "title": "Is this my best side?", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "25107929164", "owner": "123726763@N08", "secret": "114c47a8de", "server": "1520", "farm": 2, "title": "Oops how do I get out here!", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "25344947130", "owner": "123726763@N08", "secret": "53834c9fca", "server": "1707", "farm": 2, "title": "Sssh 5 minutes piece", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "25136430101", "owner": "123726763@N08", "secret": "1cda6fa57a", "server": "1591", "farm": 2, "title": "Cause and effect.", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "25223151895", "owner": "123726763@N08", "secret": "e15d7d715a", "server": "1485", "farm": 2, "title": "Wilbur ❤️", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "25177119945", "owner": "63897766@N04", "secret": "ecd41f6e59", "server": "1666", "farm": 2, "title": "Asleep ee grin.", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "24529844933", "owner": "63897766@N04", "secret": "bdcc40c5d1", "server": "1696", "farm": 2, "title": "Lola", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "25043534456", "owner": "123726763@N08", "secret": "589cfea970", "server": "1552", "farm": 2, "title": "Wilbur", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "24372051793", "owner": "63897766@N04", "secret": "bb35a20b6f", "server": "1606", "farm": 2, "title": "Puppies Rock", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "24578735060", "owner": "63897766@N04", "secret": "177c294669", "server": "1453", "farm": 2, "title": "Lola GDP", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "23653775833", "owner": "62624768@N02", "secret": "d892fd5d30", "server": "1654", "farm": 2, "title": "Pumpkin", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "23652370614", "owner": "62624768@N02", "secret": "a19223e28d", "server": "1542", "farm": 2, "title": "Pumpkin", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "23862919530", "owner": "123726763@N08", "secret": "479de358c3", "server": "1453", "farm": 2, "title": "Ouch", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "22717611138", "owner": "123726763@N08", "secret": "0352607618", "server": "722", "farm": 1, "title": "It's beginning to look a lot like Christmas .....", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "22611133519", "owner": "123726763@N08", "secret": "a318d21286", "server": "697", "farm": 1, "title": "I'm not sharing", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "22568201447", "owner": "123726763@N08", "secret": "a20efa857a", "server": "5805", "farm": 6, "title": "Wilbur and the magic apple", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "22741767730", "owner": "123726763@N08", "secret": "87c325cb58", "server": "5726", "farm": 6, "title": "Please share", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "22522845270", "owner": "123726763@N08", "secret": "b6cf65e677", "server": "705", "farm": 1, "title": "Guide Dog Pup Wilbur", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "22284172318", "owner": "123726763@N08", "secret": "fb86d7a223", "server": "5828", "farm": 6, "title": "Wilbur 8 weeks", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "21040513543", "owner": "123726763@N08", "secret": "d6c8b683ba", "server": "766", "farm": 1, "title": "Guide Dog Puppy in Training Ollie", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "21175251856", "owner": "123726763@N08", "secret": "b0d8612342", "server": "5728", "farm": 6, "title": "Guide Dog in training Sam", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "20947664938", "owner": "123726763@N08", "secret": "a73099d5bd", "server": "580", "farm": 1, "title": "Guide Dog Pup Zorro and Guide Dog Quinn", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "20816273172", "owner": "123726763@N08", "secret": "3104360281", "server": "774", "farm": 1, "title": "Puppy wants to play too!", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "20172471454", "owner": "63897766@N04", "secret": "b7c1d0c60d", "server": "774", "farm": 1, "title": "Lookout", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "20664357656", "owner": "123726763@N08", "secret": "b13ff89458", "server": "682", "farm": 1, "title": "Zorro", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "20493025530", "owner": "123726763@N08", "secret": "96b90ed740", "server": "714", "farm": 1, "title": "You watching me?", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "19911172273", "owner": "123726763@N08", "secret": "fdb8cc6882", "server": "5811", "farm": 6, "title": "Gareth", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "20497677186", "owner": "123726763@N08", "secret": "06f6eed57b", "server": "5672", "farm": 6, "title": "BELLE", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "20214065370", "owner": "63897766@N04", "secret": "187a4577c5", "server": "565", "farm": 1, "title": "Collecting :0P", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "20204714118", "owner": "123726763@N08", "secret": "61834f2e9f", "server": "270", "farm": 1, "title": "My Guide Dog Puppy in Training Zorro (aged 1 and a 1\/4)", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "19861805662", "owner": "63368383@N06", "secret": "cff8a32afd", "server": "529", "farm": 1, "title": "What's down here?", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "17150248649", "owner": "123726763@N08", "secret": "cfd79c63e4", "server": "7729", "farm": 8, "title": "If only ......", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "16269556529", "owner": "123726763@N08", "secret": "a38137eb4b", "server": "7331", "farm": 8, "title": "I can see Liverpool from here ❤️", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "16163208126", "owner": "63897766@N04", "secret": "d08f954bfa", "server": "7581", "farm": 8, "title": "A frosty romp", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "15568916903", "owner": "123726763@N08", "secret": "0490dd604b", "server": "7570", "farm": 8, "title": "Snoozing 💤", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "15435153099", "owner": "123726763@N08", "secret": "774d9fb47f", "server": "5608", "farm": 6, "title": "Guide dog pup in training Zorro 14 weeks", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "15416526117", "owner": "63897766@N04", "secret": "e12e4754e6", "server": "5604", "farm": 6, "title": "Tyler Guide Dog Puppy", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "15416407538", "owner": "63897766@N04", "secret": "24a817fa67", "server": "3944", "farm": 4, "title": "Tyler Guide Dog Puppy", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "15503195971", "owner": "62624768@N02", "secret": "801f6a6a80", "server": "5597", "farm": 6, "title": "Fall Foliage on the last day with Galahad", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "15360301791", "owner": "63897766@N04", "secret": "7e69ca30c2", "server": "2941", "farm": 3, "title": "Zara Guide Dog Puppy", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14912969238", "owner": "62624768@N02", "secret": "dffa1e1633", "server": "3916", "farm": 4, "title": "Galahad relaxes in the Air & Space Museum Udvar-Hazy Center Space Hangar", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14912961637", "owner": "62624768@N02", "secret": "d56feefbdd", "server": "3872", "farm": 4, "title": "Galahad and the Enola Gay", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14912945898", "owner": "62624768@N02", "secret": "1e0eb7e0a1", "server": "5580", "farm": 6, "title": "Is this where the kibble comes out?", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "15099470715", "owner": "62624768@N02", "secret": "1607bb5dee", "server": "5562", "farm": 6, "title": "Galahad admires the Space Shuttle Discovery", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14912794290", "owner": "62624768@N02", "secret": "b790c3bc10", "server": "3925", "farm": 4, "title": "Galahad and the SR-71 Blackbird", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14769759274", "owner": "62624768@N02", "secret": "8fa4cf82be", "server": "3841", "farm": 4, "title": "", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14489663210", "owner": "63897766@N04", "secret": "6ee9afde23", "server": "3916", "farm": 4, "title": "Jemma & the Dinosaur", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14452124027", "owner": "62624768@N02", "secret": "7eb31825ff", "server": "3913", "farm": 4, "title": "Galahad resting up after a long morning of playing with his brother Galaxy", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14635073601", "owner": "62624768@N02", "secret": "49d2361e1d", "server": "3919", "farm": 4, "title": "We're down. Now where's the noms?", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14451910427", "owner": "62624768@N02", "secret": "f5956127dd", "server": "2916", "farm": 3, "title": "Galaxy and Galahad drinking water from the kiddie pool", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14451662600", "owner": "62624768@N02", "secret": "23c6f8d57a", "server": "5506", "farm": 6, "title": "Two very tired brothers!", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14615323926", "owner": "62624768@N02", "secret": "5e31c90f63", "server": "5567", "farm": 6, "title": "Galahad and Galaxy playing with each other", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14615322796", "owner": "62624768@N02", "secret": "69cf360911", "server": "2913", "farm": 3, "title": "Galahad with a tennis ball in his mouth and Galaxy behind him", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14451659640", "owner": "62624768@N02", "secret": "c9bc70e7e9", "server": "3904", "farm": 4, "title": "Maybe they'll let us out for good behavior?", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14638315325", "owner": "62624768@N02", "secret": "20fa2e549e", "server": "3899", "farm": 4, "title": "Think they'll give us dinner soon?", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14638203685", "owner": "62624768@N02", "secret": "6c7c8a397b", "server": "2902", "farm": 3, "title": "Maybe the bone is down here?", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14451357909", "owner": "62624768@N02", "secret": "bd16180a41", "server": "3852", "farm": 4, "title": "Not fast enough Galaxy!", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14134766077", "owner": "62624768@N02", "secret": "660c97ae28", "server": "5504", "farm": 6, "title": "Hi Internetz! Woof!", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14278141756", "owner": "62624768@N02", "secret": "dfd5fa7e49", "server": "2897", "farm": 3, "title": "JosephGruber_20140529_001525", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14091080670", "owner": "62624768@N02", "secret": "0a6ee62901", "server": "3700", "farm": 4, "title": "IMG_5457", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14232852313", "owner": "62624768@N02", "secret": "a82b86f108", "server": "2924", "farm": 3, "title": "JosephGruber_20140518_001080", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14232730013", "owner": "62624768@N02", "secret": "39a08ef3c0", "server": "5236", "farm": 6, "title": "JosephGruber_20140518_001037", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14212565595", "owner": "62624768@N02", "secret": "9e1aff5ea0", "server": "5596", "farm": 6, "title": "JosephGruber_20140518_001052", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14020840037", "owner": "62624768@N02", "secret": "8359c24b7a", "server": "2907", "farm": 3, "title": "", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14178697016", "owner": "62624768@N02", "secret": "6da9a7596e", "server": "2930", "farm": 3, "title": "A Perfect Spring Sunset", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14199318492", "owner": "62624768@N02", "secret": "d9b823a525", "server": "2915", "farm": 3, "title": "Relaxed by the water fountains", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "14221963033", "owner": "62624768@N02", "secret": "02273a9dfd", "server": "2901", "farm": 3, "title": "Went for a walk", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "13964724048", "owner": "62624768@N02", "secret": "52a5211f7b", "server": "7384", "farm": 8, "title": "I was given a @Starbucks braille gift card. Asked @AstroPuppy to read it for me. ;-)", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "13727754413", "owner": "62624768@N02", "secret": "ee14aeff69", "server": "7391", "farm": 8, "title": "", "ispublic": 1, "isfriend": 0, "isfamily": 0 }
];

// URL for a flickr search for more puppies
var puppy_flickr_url = "https://api.flickr.com/services/rest"+
    "?method=flickr.photos.search"+
    "&api_key={{262e2d8627a867729fa6c0bd0f0a2672}}"+
    "&tags=guide+dog+puppy"+
    "&tag_mode=all"+
    "&per_page=32"+
    "&asynchronous=false";

// Get more puppies if possible, adding them to thePuppies
jQuery.ajax({
    dataTyle: "json",
    url: puppy_flickr_url,
    async: false,
    success: function(data){
    jQuery.each(data.photos.photo, function(i,item){
	thePuppies.push(item);
    });
    }
});


// converts a puppy to its image URL
function puppy_url(item){
    var img_src = "http://farm"+item.farm+
		".static.flickr.com/"+item.server+
		"/"+item.id+
		"_"+item.secret+
		"_m.jpg";
    return img_src
}







function detrump(thePuppies){
	// called on page load. Searches all img alt text and srcs for the strings in blacklist, replaces with puppies
	var pagepics=document.getElementsByTagName("img"), i=0, img;	
	var blacklist = ["Trump","trump"];
	while (img = pagepics[i++])
	{	
		blacklist.forEach(function(blist) {	
			var alttext = String(img.alt);
			alttext = alttext.toLowerCase();
			var imgsrc = String(img.src);
			imgsrc = imgsrc.toLowerCase();
			if ((alttext.indexOf(blist) != -1) || (imgsrc.indexOf(blist) != -1)){
			    var randp = Math.floor(Math.random() * thePuppies.length) + 1
			    img.src = puppy_url(thePuppies[randp]);
			    img.alt = "Raise a puppy change a life!";
			};
		});		
	}	    
};

// add listener
document.addEventListener('DOMContentLoaded', detrump(thePuppies), false);
