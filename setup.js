
"use strict"
const repl = require('repl'); // optional
const sqlite = require('sqlite3').verbose();
var filedb = 'address_book.db'
var db = new sqlite.Database(filedb)
var fs = require('fs')
var csv = require('fast-csv')
var dataPerson = [];
var temp ="";


// var CREATE_DATA =
// "CREATE TABLE IF NOT EXISTS "+
// "grup(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, firstname TEXT, middlename TEXT, lastname TEXT, "+
// "name_suffix TEXT, nickname TEXT, party TEXT, state TEXT, district TEXT, in_office TEXT, gender TEXT, "+
// "phone TEXT, fax TEXT, website TEXT, webform TEXT, congress_office TEXT, bioguide_id TEXT, votesmart_id TEXT, fec_id TEXT, "+
// "govtrack_id TEXT, crp_id TEXT, twitter_id TEXT, congresspedia_url TEXT, youtube_url TEXT, facebook_id TEXT, official_rss TEXT, "+
// "senate_class TEXT, birthdate TEXT, oc_email TEXT);";
//
// let createData = () => {
//   db.serialize(function(){
//     db.run(CREATE_DATA,function(err){
//         if(err){
//           console.log(err);
//         }else{
//           console.log('CREATE TABLE');
//           seedKontak()
//         }
//       });
//     });
//   }



class DataCongress {
  constructor(param) {
    this.title = param['title'] //0
    this.firstname = param['firstname'] //1
    this.middlename = param['middlename'] //2
    this.lastname = param['lastname'] //3
    this.name_suffix = param['name_suffix'] //4
    this.nickname = param['nickname'] //5
    this.party = param['party'] //6
    this.state = param['state'] //7
    this.district = param['district'] //8
    this.in_office = param['in_office'] //9
    this.gender = param['gender'] //10
    this.phone = param['phone'] //11
    this.fax = param['fax'] //12
    this.website = param['website'] //13
    this.webform = param['webform'] //14
    this.congress_office = param['congress_office'] //15
    this.bioguide_id = param['bioguide_id'] //16
    this.votesmart_id = param['votesmart_id'] //17
    this.fec_id = param['fec_id'] //18
    this.govtrack_id = param['govtrack_id'] //19
    this.crp_id = param['crp_id'] //20
    this.twitter_id = param['twitter_id'] //21
    this.congresspedia_url = param['congresspedia_url'] //22
    this.youtube_url = param['youtube_url'] //23
    this.facebook_id = param['facebook_id'] //24
    this.official_rss = param['official_rss'] //25
    this.senate_class = param['senate_class'] //26
    this.birthdate = param['birthdate'] //27
    this.oc_email = param['oc_email'] //28
  }
}

class Convert {
  constructor(file) {
    this.file = file
    this._people = null
  }

  get congress() {

      fs.createReadStream(this.file)
        .pipe(csv())
        .on('data',function(data){

          dataPerson.push(new DataCongress({title:data[0], firstname:data[1], middlename:data[2], lastname:data[3], name_suffix:data[4], nickname:data[5], party:data[6], state:data[7], district:data[8], in_office:data[9], gender:data[10], phone:data[11], fax:data[12], website:data[13], webform:data[14], congress_office:data[15], bioguide_id:data[16], votesmart_id:data[17], fec_id:data[18], govtrack_id:data[19], crp_id:data[20], twitter_id:data[21], congresspedia_url:data[22], youtube_url:data[23], facebook_id:data[24], official_rss:data[25], senate_class:data[26], birthdate:data[27], oc_email:data[28]}))

        })
        .on('end',function(data){
          for(var i=0;i<dataPerson.length;i++) {
            temp += dataPerson[i].title +","+dataPerson[i].first_name+","+dataPerson[i].middlename+","+dataPerson[i].lastname+","+dataPerson[i].name_suffix+","+dataPerson[i].nickname+","+dataPerson[i].party+","+dataPerson[i].state+","+dataPerson[i].district+","+dataPerson[i].in_office+","+dataPerson[i].gender+","+dataPerson[i].phone+","+dataPerson[i].fax+","+dataPerson[i].website+","+dataPerson[i].webform+","+dataPerson[i].congress_office+","+dataPerson[i].bioguide_id+","+dataPerson[i].votesmart_id+","+dataPerson[i].fec_id+","+dataPerson[i].govtrack_id+","+dataPerson[i].crp_id+","+dataPerson[i].twitter_id+","+dataPerson[i].congresspedia_url+","+dataPerson[i].youtube_url+","+dataPerson[i].facebook_id+","+dataPerson[i].official_rss+","+dataPerson[i].senate_class+","+dataPerson[i].birthdate+","+dataPerson[i].oc_email+"\n";
          }

      //  console.log(temp);
       convert.save(temp);
        })

        if (this._people)
          return this._people

  }

  save(temp){
    fs.writeFile('legislators.csv', temp);
  }
}

let convert = new Convert('legislators.csv')
// console.log(parser.people);
convert.congress



console.log(dataPerson);
