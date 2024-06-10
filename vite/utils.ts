import _ from 'lodash'

export function parseEnv(env: Record<string, any>) {
  const envs = _.cloneDeep(env);
  Object.entries(envs).forEach(([key, value]) => {
    if (value === 'true' || value === 'false') {
      envs[key] = value === 'true' ? true : false;
    }
    if (/^\d+$/.test(value)) {
      envs[key] = parseInt(value, 10);
    }
  })
  return envs;
}