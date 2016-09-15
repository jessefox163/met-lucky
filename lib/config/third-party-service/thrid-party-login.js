if(Meteor.isServer){
    Meteor.startup(function() {
        ServiceConfiguration.configurations.upsert(
            {service: "weibo"},
            {
                $set: {
                    clientId: "3170878608",
                    loginStyle: "popup",
                    secret: "9378afce45ec7aa334facfa164dec179"
                }
            }
        );

        ServiceConfiguration.configurations.upsert(
            {service: "wechat"},
            {
                $set: {
                    appId: "wxd7f9e6331a00b697",
                    scope:'basic',
                    secret: "08ccbdd16669d8c604aea07fa26715d0"
                }
            }
        );

        ServiceConfiguration.configurations.upsert(
            {service: "qq"},
            {
                $set: {
                    clientId: "qqd0545f0447d2bb9b",
                    scope:'get_user_info',
                    secret: "qqd0545f0447d2bb9b"
                }
            }
        );
    });
}