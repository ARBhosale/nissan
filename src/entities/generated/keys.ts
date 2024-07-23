import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: 'a2511d33bbfb44268081276a55ffcb34'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'cbdc562bd0d745aaa468b5c2da3ec99e'
                    }
                }
            }
        }
    }
}
