import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'global', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/models/global.ts').default) });
app.model({ namespace: 'login', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/models/login.ts').default) });
app.model({ namespace: 'order', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/models/order.ts').default) });
app.model({ namespace: 'setting', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/models/setting.ts').default) });
app.model({ namespace: 'user', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/models/user.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/user/login/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/user/register/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/dashboard/analysis/model.tsx').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/dashboard/monitor/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/dashboard/workplace/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/form/basic-form/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/form/step-form/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/form/advanced-form/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/list/search/articles/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/list/search/projects/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/list/search/applications/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/list/table-list/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/list/basic-list/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/list/card-list/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/profile/basic/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/profile/advanced/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/account/center/model.ts').default) });
app.model({ namespace: 'model', ...(require('/Users/wangwei/Documents/web-dev/erp-sys/src/pages/account/settings/model.ts').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
