<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role = Role::create(['name' => 'admin']);
        $role2 = Role::create(['name' => 'bdr']);
        
        $permission1 = Permission::create(['name' => 'gestionar pedidos']);
        $permission2 = Permission::create(['name' => 'gestionar usuarios']);
        $permission3 = Permission::create(['name' => 'gestionar rutas']);
        
        $role->givePermissionTo($permission1);
        $role->givePermissionTo($permission2);
        $role->givePermissionTo($permission3);

        $role2->givePermissionTo($permission1);
        
        

        
    }
}
