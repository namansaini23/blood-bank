class bloodbankLogic{
    // For recipient only.
    static async postAd(req,res) {
        const request = {
            user_id:101,
            quantity:15,
            blood_group:"A+",
            deadline:"timestamp()",
            hospital_name:"fortis"
        }
    }
    static async getAllAds(req,res) {
        
    }

    static async bloodTransanction(req,res) {
        const request = {
            recipient_id:101,
            donor_id:102,
            quantity:15,
            blood_group:"A+",
            hospital_name:"fortis"
        }
        const recipient_ad_table_columns = {
            recipient_id:101,
            donor_id:102,
            quantity:15,
            timestamp,
            blood_group,
            hospital_name
        }
    }
    static async getAllBloodTransanctions(req,res) {
        
    }
}