    back_length: any;
    shoulder: any;
    back_length: any;
    r_up_bust: any;
    bust: any;
    r_un_bust: any;
    true_waist: any;
    blouse_hip: any;
    full_hips: any;
    thigh: any;
    calf: any;
    sleeve_length: any;
    sleeve_width: any;
    neck_dip: any;
    bust_point: any;
    und_bust_point: any;
    half_length: any;
    blouse_length: any;
    hip_length, any;
    knee_length: any;
    three_four_length: any;
    tea_length: any;
    full_length:  any;
    skirt_length: any;
    inseam:any;




userMeasurement(){

  let userData = new FormData;

userData.append('user[measurement][shoulder]', this.shoulder), ;
userData.append('user[measurement][back_length]', this.back_length);
userData.append('user[measurement][bust]', this.bust);
userData.append('user[measurement][r_un_bust]', this.r_un_bust);
userData.append('user[measurement][true_waist]', this.true_waist);
userData.append('user[measurement][blouse_hip]', this.blouse_hip);
userData.append('user[measurement][full_hips]', this.full_hips);
userData.append('user[measurement][thigh]', this.thigh);
userData.append('user[measurement][calf]', this.calf);
userData.append('user[measurement][sleeve_length]', this.sleeve_length);
userData.append('user[measurement][sleeve_width]', this.sleeve_width);
userData.append('user[measurement][neck_dip]', this.neck_dip);
userData.append('user[measurement][bust_point]', this.bust_point);
userData.append('user[measurement][und_bust_point]', this.und_bust_point);
userData.append('user[measurement][half_length]', this.half_length);
userData.append('user[measurement][blouse_length]', this.blouse_length);
userData.append('user[measurement][hip_length]', this.hip_length);
userData.append('user[measurement][knee_length]', this.knee_length);
userData.append('user[measurement][three_four_length]', this.three_four_length);
userData.append('user[measurement][tea_length]', this.tea_length);
userData.append('user[measurement][full_length]', this.full_length);
userData.append('user[measurement][skirt_length]', this.skirt_length);
userData.append('user[measurement][inseam]', this.inseam);





// "shoulder": '',
//     "back_length": '',
//     'r_up_bust': '',
//     'bust': '',
    // 'r_un_bust': '',
    // 'true_waist': '',
    // 'blouse_hip': '',
    // 'full_hips': '',
    // 'thigh': '',
    // 'calf': '',
    // 'sleeve_length': '',
    // 'sleeve_width': '',
    // 'neck_dip': '',
    // 'bust_point': '',
    // 'und_bust_point': '',
    // 'half_length': '',
    // 'blouse_length': '',
    // 'hip_length', '',
    // 'knee_length': '',
    // 'three_four_length': '',
    // 'tea_length': '',
    // 'full_length':  '',
    // 'skirt_length': '',
    // 'inseam':''










    let loading = this.loadingCtrl.create({
      content: 'Signing you up...',
      spinner: 'crescent'
    });

    loading.present();


    let data: Observable<any> = this.http.post(`${this.baseUrl}`, userData)
    data.subscribe((result) => {

      this.storage.set('token', result.jwt).then(()=>{
        this.storage.get('token').then((token)=>{
          this.token = token;
          loading.dismiss();
          this.app.getRootNav().push(TabsPage);
        }

        )})

        this.storage.set('auth', true);
    }, error => {
      this.error = true;
      loading.dismiss();
    });
  }
