import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the QuotesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes-detail',
  templateUrl: 'quotes-detail.html',
})
export class QuotesDetailPage {
  quoteDetail: { quote: '', author: '' };
  constructor(public navCtrl: NavController, public navParams: NavParams, private sharingVar: SocialSharing) {
    this.quoteDetail = navParams.get('quote');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesDetailPage');
  }
  twitterShare() {
    console.log("in twitter share");
    let quote: string = this.quoteDetail.quote;
    this.sharingVar.shareViaTwitter(quote.substring(0, 110) + "..", null /*Image*/, "http://ionicframework.com/img/homepage/ionicview-icon_2x.png")
      .then((data) => {
        alert("Success " + data);
      },

      (err) => {
        alert("failed " + err)
      })
  }
}
