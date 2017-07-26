const express = require('express')
router = express.Router()
var OAuth = require('oauth');

var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'B9LhQsGqJ8JDdew9REjBVtD3B',
      'Ul7zX7ZfEtBClCsV3jAtuTeTc5Bxd2jOtl6ADVHrJBx9m5rtqc',
      '1.0A',
      null,
      'HMAC-SHA1'
  );

router.post('/',(req,res)=>{
  oauth.post(
      	`https://api.twitter.com/1.1/statuses/update.json?status=${req.body.tweet}`,
        '115323080-Ni3shyXPDXYM66Y3WX4zR7MyAnZKGazZK2FXE0q2', //test user token
        '2mysea5kabJD7ikDWvskNExjjz2I21mEbgik5wwvi9m9N',
      	`your`,
      	'text', //emang teks gini aja
      	(error, data) => {
      		if (error){
            res.send(error);
          }
      		//console.log(e);
      		res.send(data);
      	}
      );
})




module.exports = router;
